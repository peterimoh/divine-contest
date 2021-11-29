const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': '####yourclientid######',
  'client_secret': '####yourclientsecret#####'
});

 class Vote {

  static amountPerVote = 550;
  res;

  amount;
  transID;
  numberOfVote;
  contestantID;

  constructor(res, contestantID, numberOfVote, amount, transID){
    this.res = res;
    this.amount = amount;
    this.transID = transID;
    this.contestantID = contestantID;
    this.numberOfVote = numberOfVote;
  }

  async ValidatePayment(req){
    
      const payerId = req.query.PayerID;
      const paymentId = req.query.paymentId;

      const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
      };
      paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            this.TransactionMessage(this.res, 404, "Transaction failed")

        } else {
            console.log(JSON.stringify(payment));
            this.UpdateDataBase()
            this.TransactionMessage(this.res, 200, "Transaction successfuly completed")
        }
    });
  }

  UpdateDataBase(){

    
  }

  TransactionMessage(res, statusCode, msg){
    return res.status(statusCode).send({msg: msg});
  }

}

module.exports =  Vote


