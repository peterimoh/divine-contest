const request = require("request");

export class Vote {

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

  ValidatePayment(){
    
      let flutterWaveReturnedObject;
    
      let options = {
        method: "GET",
        url: `https://api.flutterwave.com/v3/transactions/${this.transID}/verify`,
        headers: {
          "content-type": "application/json",
          authorization: "FLWSECK-db2f2e4art8e3ceecd9d5e7dc73bf899d3-X",
        },
      };
      
      await request(options, async (err, response) => {
        flutterWaveReturnedObject = JSON.parse(response.body);
        
        if (flutterWaveReturnedObject.data.status == "successful") {
          if (
            flutterWaveReturnedObject.data.amount == this.amount ||
            flutterWaveReturnedObject.data.amount > this.amount
            ) {

              this.UpdateDataBase();
              this.TransactionMessage(res, 200, "Your payment was successful")
            }
            else {
            this.TransactionMessage(res, 400, "You tried to pay invalid Amount");
          }
        } 

        else {
          
        }
      })
  }

  UpdateDataBase(){
    
    
  }

  TransactionMessage(res, statusCode, msg){
    return res.status(statusCode).send({msg: msg});
  }

}
