const Voter = require('./vote.controller');

const Model = require('../model/auth.model');

class Contest extends Voter {
  res;
  constructor(res) {
    super();
    this.res = res;
  }

  Create(contest, contestObject) {
    Model.Insert(contest, contestObject, (err, result) => {
      if (err)
        console.log(err),
          this.TransactionMessage(
            this.res,
            400,
            'Error creating contest table'
          );
      else {
        Model.Select(contest, (err, result) => {
          if (err)
            this.TransactionMessage(
              this.res,
              400,
              'Error getting contest table'
            );
          else {
            this.TransactionMessage(this.res, 200, result);
          }
        });
      }
    });
  }

  Select(contest) {
    Model.Select(contest, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, 'Error selecting contest table');
      else this.TransactionMessage(this.res, 200, result);
    });
  }
  
  SelectById(contest) {
    Model.Select(contest, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, 'Error selecting contest table');
      else this.TransactionMessage(this.res, 200, result);
    });
  }
}

module.exports = Contest;
