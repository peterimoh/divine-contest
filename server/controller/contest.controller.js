const Voter = require("./vote.controller");

const Model = require("../model/auth.model");

class Contest extends Voter {
  res;
  constructor(res) {
    super();
    this.res = res;
  }

  Create(contest, contestObject) {
    Model.Insert(contest, contestObject, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, "Error creating contest table");
      else {
        Model.Select(contest, (err, result) => {
          if (err)
            this.TransactionMessage(
              this.res,
              400,
              "Error getting contest table"
            );
          else {
            this.TransactionMessage(this.res, 200, result);
          }
        });
      }
    });
  }

  CreateValidData(contest, contestObject) {
    let body = {
      user_id: contestObject.body.user_id,
      contest_id: contestObject.body.contest_id,
      create_time: new Date(),
    };
    console.log("OBJECT ", contestObject)
    console.log("BODY ", body)
    Model.MultiplySelect(
      contest,
      "user_id", 
      "contest_id",
      body,
      (err, resP) => {
        console.log("Incoming contestand boyd ", body)
        if (err)
          this.TransactionMessage(
            this.res,
            400,
            "Error getting contestants table"
          );
        if (Object.entries(resP).length == 0) {
          Model.Insert(contest, contestObject, (err, result) => {
            if (err)
              this.TransactionMessage(
                this.res,
                400,
                "Error creating contestants table"
              );
            else {
                this.MultipleSelect( contest, "user_id", "contest_id",contestObject)
            //   Model.MultiplySelect(
            //     contest,
            //     "user_id",
            //     "contest_id",
            //     contestObject,
            //     (err, result) => {
            //       if (err)
            //         this.TransactionMessage(
            //           this.res,
            //           400,
            //           "Error getting contestants table"
            //         );
            //       else {
            //         this.TransactionMessage(this.res, 200, result);
            //       }
            //     }
            //   );
            }
          });
        } else {
          this.TransactionMessage(this.res, 200, {
            msg: "You have already joined for this contest",
          });
        }
      }
    );
  }

  Select(contest) {
    Model.Select(contest, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, "Error selecting contest table");
      else this.TransactionMessage(this.res, 200, result);
    });
  }

  SelectById(tableName, contestId) {
    Model.SelectById(tableName, "user_id", contestId, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, "Error selecting contest table");
      else this.TransactionMessage(this.res, 200, result);
    });
  }
  
  SelectByInnerJoin(tableName, contestId) {
    Model.InnerJoin(tableName, "user_id", contestId, (err, result) => {
        console.log("this is  teh rekt s", result)
        console.log(err)
      if (err)
        this.TransactionMessage(this.res, 400, "Error selecting contest table");
      else this.TransactionMessage(this.res, 200, result);
    });
  }

  MultipleSelect(tableName, col1, col2, contestObject){
    Model.MultiplySelect(
        tableName, col1, col2, contestObject,
        (err, result) => {
            console.log(result)
          if (err)
            this.TransactionMessage(
              this.res,
              400,
              "Error getting contestants table"
            );
          else {
            this.TransactionMessage(this.res, 200, result);
          }
        }
      );
  }
  
  MultipleSelectInnerJoin(tableName, col1, col2, contestObject){
      console.log(tableName, col1, col2, contestObject)
    Model.MultipleSelectInnerJoin(
        tableName, col1, col2, contestObject,
        (err, result) => {
            console.log("Constant full data ", result)
          if (err)
            this.TransactionMessage(
              this.res,
              400,
              "Error getting contestants table"
            );
          else {
            this.TransactionMessage(this.res, 200, result);
          }
        }
      );
  }

  DeleteById(tableName, contestId) {
    Model.DeleteById(tableName, "user_id", contestId, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, "Error selecting contest table");
      else this.TransactionMessage(this.res, 200, result);
    });
  }
}

module.exports = Contest;
