const Voter = require('./vote.controller')

const Model = require('../model/auth.model');

class Contest extends Voter {

    res;
    constructor(res){
        this.res = res;
    }

    CreatContestTable(contestObject){
        Model.Insert("contest", contestObject, (err, result)=>{
            if(err) this.TransactionMessage(res, 400, "Error creating contest table")
            else {
                Model.Select("contest", (err, result)=>{
                    if(err) this.TransactionMessage(res, 400, "Error getting contest table");
                    else{
                        this.TransactionMessage(res, 200, result)
                    }
                })
            }
        })
    }

    GetContestTable(contestTableObject){

    }

    CreateContentants(){

    }
}

module.exports = Contest;