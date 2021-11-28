
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

  async ValidatePayment(){
    
  }

  UpdateDataBase(){

    
  }

  TransactionMessage(res, statusCode, msg){
    return res.status(statusCode).send({msg: msg});
  }

}

module.exports =  Vote


