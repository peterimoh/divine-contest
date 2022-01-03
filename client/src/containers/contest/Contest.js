import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import { FcCalendar, GiTargetPrize } from 'react-icons/all';
import Sidebar from '../../components/dashboardnew/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContestant,
  contestAction,
} from '../../store/action/contest.action';
import 'react-toastify/dist/ReactToastify.css';
import './contest.css';

const Contest = () => {
  let dispatch = useDispatch();
  let contest = useSelector((state) => state.contest);
  let userID = useSelector((state) => state.login.user.id);

  let { contestList } = contest;
  let [contestDetails, setContestDetails] = useState('');
  let [show, setShow] = useState(false);

  const viewContest = (el) => {
    setContestDetails(el);
    setShow(true);
  };

  const checkDate = async (date, id) => {
    console.log('Date to be validated ', date);
    var today = new Date();
    var due_date = new Date(date);
    console.log('due date to validate ', today, due_date);

    if (due_date < today) {
      setShow(true);
      setContestDetails('This contest has expired');
      setTimeout(() => {
        setShow(false);
      }, 5000);
    } else {
      let body = {
        user_id: userID,
        contest_id: id,
      };

      try {
        const { data } = await axios.post(`/api/auth/addContestant/`, { body });
        // console.log('constenstate data ', data);
        setContestDetails(data && data.msg.msg);

        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 5000);
      } catch (err) {
        console.log(err);
        setContestDetails('Network Error, try again');

        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 5000);
      }
    }
  };

  const notify = () => {
    toast(contestDetails, {
      toastId: userID,
    });
  };

  useEffect(() => {
    dispatch(contestAction());
  }, []);

  return (
    <Fragment>
      <Sidebar />
      <div id='contest mt-5 mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='contest-header mt-3 mb-4'>
                <h1>Available Contest</h1>

                {show === true ? (
                  <>
                    {notify()}
                    <ToastContainer progressClassName='toastProgress' />
                  </>
                ) : null}
                <br />
                <div className='contest__display__wrapper'>
                  <div className='row w-100'>
                    {contestList && contestList.length > 0 ? (
                      <>
                        {contestList.map((x) => {
                          const {
                            id,
                            start_time,
                            end_time,
                            description,
                            title,
                            prize,
                          } = x;
                          const deadline = new Date(
                            start_time.slice(0, 10)
                          );
                          {/* console.log('deadline====', deadline) */}
                          let today = new Date()
                          {/* console.log(today) */}

                          return (
                            <div className='col-sm-3 col-md-3 contest' key={id}>
                              <div className='contest__card'>
                                <div className='contest__card__header'>
                                  <h4>{title}</h4>
                                </div>
                                <div className='contest__card__footer'>
                                  <button
                                    type='button'
                                    className='btn btn-primary m-2'
                                    data-bs-toggle='modal'
                                    data-bs-target={'#ww' + id}
                                  >
                                    View
                                  </button>
                                  {deadline === today || deadline < today ? (
                                    <button
                                      // onClick={() => checkDate(end_time, id)}
                                      className='btn btn-secondary m-2'
                                      // disabled
                                      data-bs-toggle='tooltip'
                                      data-bs-placement='top'
                                      title='This contest has Already Started'
                                    >
                                      Join
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => checkDate(end_time, id)}
                                      // onClick={notify}
                                      className='btn btn-success m-2'
                                    >
                                      Join
                                    </button>
                                  )}
                                </div>
                                <div
                                  className='modal fade'
                                  id={'ww' + id}
                                  tabindex='-1'
                                  aria-labelledby='exampleModalLabel'
                                  aria-hidden='true'
                                >
                                  <div className='modal-dialog'>
                                    <div className='modal-content'>
                                      <div className='modal-header'>
                                        <h5
                                          className='modal-title'
                                          id='exampleModalLabel'
                                          style={{
                                            textTransform: 'uppercase',
                                          }}
                                        >
                                          {title}
                                        </h5>
                                        <button
                                          type='button'
                                          className='btn-close'
                                          data-bs-dismiss='modal'
                                          aria-label='Close'
                                        ></button>
                                      </div>
                                      <div className='modal-body'>
                                        <div className='container'>
                                          <p>
                                            <b>Description:</b> {description}
                                          </p>
                                          <p>
                                            <span>
                                              <FcCalendar />
                                              <b>Starts on:</b>{' '}
                                              {start_time.slice(0, 10)}
                                            </span>
                                          </p>
                                          <p>
                                            <span>
                                              <FcCalendar />
                                              <b>Ends on:</b>{' '}
                                              {end_time.slice(0, 10)}
                                            </span>
                                          </p>
                                          <p>
                                            <span>
                                              <GiTargetPrize />
                                              <b>Prize to Won:</b>{' '}
                                              <strong>$</strong>
                                              {prize}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div className='modal-footer'>
                                        <button
                                          type='button'
                                          className='btn btn-secondary'
                                          data-bs-dismiss='modal'
                                        >
                                          Close
                                        </button>
                                        {/* <button
                                          type='button'
                                          onClick={() =>
                                            checkDate(end_time, id)
                                          }
                                          className='btn btn-success'
                                        >
                                          Join
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <div>
                        <center>No Contest Found At the Moment</center>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contest;
