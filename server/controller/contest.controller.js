const Voter = require('./vote.controller');

const Model = require('../model/auth.model');

class Contest extends Voter {
  res;
  req;
  constructor(res, req) {
    super();
    this.res = res;
    this.req = req;
  }

  Create(contest, contestObject) {
    Model.Insert(contest, contestObject, (err, result) => {
      if (err) {
        console.log(err);
        this.TransactionMessage(this.res, 400, 'Error creating contest table');
      } else {
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

  CreateValidData(contest, contestObject) {
    const { body } = contestObject;
    const addContestObj = {
      user_id: body.user_id,
      contest_id: body.contest_id,
      create_time: new Date(),
    };

    console.log('contest object ', addContestObj);
    console.log('TABLE NAME ', contest);
    Model.MultiplySelect(
      contest,
      'user_id',
      'contest_id',
      addContestObj,
      (err, resP) => {
        console.log('Incoming contestand boyd ', addContestObj);
        console.log('CALLBACK RESPONSE FROM DB ', resP);
        console.log(Object.entries(resP).length);
        if (err)
          this.TransactionMessage(
            this.res,
            401,
            'Error getting contestants table'
          );
        if (Object.entries(resP).length < 1) {
          Model.Insert(contest, addContestObj, (err, result) => {
            if (err) {
              console.log(err);
              this.TransactionMessage(
                this.res,
                400,
                'Error creating contestants table'
              );
            }
            this.TransactionMessage(this.res, 200, {
              msg: 'You have Successfully Joined the Contest',
            });
          });
        } else {
          this.TransactionMessage(this.res, 200, {
            msg: 'You have already joined for this contest',
          });
        }
      }
    );
  }

  Select(contest) {
    Model.Select(contest, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, 'Error selecting contest table');
      else this.TransactionMessage(this.res, 200, result);
    });
  }

  SelectSingleInnerJoin(contest) {
    Model.SingleInnerJoin(contest, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, 'Error selecting contest table');
      else this.TransactionMessage(this.res, 200, result);
    });
  }

  SelectById(tableName, contestId) {
    Model.SelectById(tableName, 'user_id', contestId, (err, result) => {
      if (err)
        this.TransactionMessage(this.res, 400, 'Error selecting contest table');
      else this.TransactionMessage(this.res, 200, result);
    });
  }

  SelectByUUID(tableName, uuid) {
    console.log('uuid', uuid);
    console.log('table name====', tableName);
    Model.SelectByUUID(tableName, 'uuid', uuid, (err, result) => {
      // console.log(result);
      if (err) {
        console.log(err);
        return this.TransactionMessage(
          this.res,
          400,
          'Error Getting Contestant'
        );
      }
      if (result.length === 0)
        return this.TransactionMessage(this.res, 404, {
          error: 'Contestant Not Found!',
        });
      this.TransactionMessage(this.res, 200, result);
    });
  }

  SelectByInnerJoin(tableName, contestId) {
    Model.InnerJoin(tableName, 'user_id', contestId, (err, result) => {
      // console.log('this is  teh rekt s', result);
      console.log(err);
      if (err)
        this.TransactionMessage(this.res, 400, 'Error selecting contest table');
      else this.TransactionMessage(this.res, 200, result);
    });
  }

  MultipleSelect(tableName, col1, col2, contestObject) {
    Model.MultiplySelect(
      tableName,
      col1,
      col2,
      contestObject,
      (err, result) => {
        console.log(result);
        if (err)
          this.TransactionMessage(
            this.res,
            400,
            'Error getting contestants table'
          );
        else {
          this.TransactionMessage(this.res, 200, result);
        }
      }
    );
  }

  MultipleSelectInnerJoin(tableName, col1, col2, contestObject) {
    console.log(tableName, col1, col2, contestObject);
    Model.MultipleSelectInnerJoin(
      tableName,
      col1,
      col2,
      contestObject,
      (err, result) => {
        console.log('Constant full data ', result);
        if (err)
          this.TransactionMessage(
            this.res,
            400,
            'Error getting contestants table'
          );
        else {
          this.TransactionMessage(this.res, 200, result);
        }
      }
    );
  }

  DeleteById(tableName, contestId) {
    console.log(contestId);
    console.log('table name===', tableName);
    Model.DeleteById(tableName, 'id', contestId, (err, result) => {
      if (err) {
        this.TransactionMessage(this.res, 400, 'Error selecting contest table');
      } else {
        this.req.flash({ msg: 'You have successfully left the contest' });
        this.res.redirect('back');
      }
    });
  }

  DeleteContestentById(tableName, contestId) {
    console.log(contestId);
    console.log('table name===', tableName);
    Model.DeleteById(tableName, 'user_id', contestId, (err, result) => {
      if (err) {
        this.res.redirect('back');
        // this.TransactionMessage(this.res, 400, 'Error selecting contest table');
      } else {
        this.req.flash({ msg: 'You have successfully left the contest' });
        this.res.redirect('back');
      }
    });
  }
}

module.exports = Contest;
