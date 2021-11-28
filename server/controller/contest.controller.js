import { Voter } from './auth.controller';

const Model = require('../model/auth.model');

export class Contest extends Voter {

    res;
    contestObject;

    constructor(res, contestObject){
        this.res = res;
        this.contestObject = contestObject;

    }

    CreatContestTable(){
        Model.Insert("contest", this.contestObject, (err, result)=>{
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

    GetContestTable(){

    }

    CreateContentants(){

    }
}