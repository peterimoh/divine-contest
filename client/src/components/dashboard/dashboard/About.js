import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';
import {apiUrl} from '../../../api'



const About = () => {
  let voteLinkBaseURL = `${apiUrl}/api/auth/vote`;

  let userID = useSelector((state) => state.login.user.id);
  let { data } = useSelector((state) => state.profile.detail);

  let [contest, setContest] = useState([]);

  const CopyLink = (el) => {
    var copyText = document.createElement('input');
    copyText.value = voteLinkBaseURL + `/?${userID}pZPY$${el.cid}hDZP`;
    console.log('Link to copy ', copyText.value);
    document.body.appendChild(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    document.execCommand('copy');
    alert(` ${copyText.value} \n Voting link copy to clipboard`);
    document.body.removeChild(copyText);
  };

  const postData = async () => {
    try {
      const { data } = await axios.post(
        `${apiUrl}/api/auth/getContestantById/`,
        {
          user_id: userID,
        }
      );
      console.log('data', data);
      setContest(data.msg);
    } catch (err) {}
  };

  useEffect(() => {
    postData();
  }, []);

  return (
    <AboutStyled>
      <div className='container'>
        {/* <div className='row d-flex'> */}
        <div className='col-md-12 col-sm-12 mb-4 card-wrapper'>
          <div className='card details'>
            <h4 className='mb-3'>
              <b>My Contests</b>
            </h4>
            {contest ? (
              contest.map((el, index) => {
                return (
                  <React.Fragment key={index}>
                    <div style={{ marginBottom: '20px' }}>
                      <p
                        style={{ display: 'unset' }}
                        className='align-item-center'
                      >
                        {el.title} Contest
                      </p>
                      <div className='d-fle'>
                        <button
                          data-bs-toggle='modal'
                          data-bs-target={'#ww' + el.cid}
                          className='btn btn-md btn-primary m-2'
                          style={{ display: 'inline', float: 'right' }}
                        >
                          view
                        </button>
                        <button
                          onClick={() => CopyLink(el)}
                          className='btn btn-md btn-success  m-2'
                          style={{ display: 'inline', float: 'right' }}
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    {/* modal starts  */}
                    <div
                      className='modal fade'
                      id={'ww' + el.cid}
                      tabindex='-1'
                      aria-labelledby='exampleModalLabel'
                      aria-hidden='true'
                    >
                      <div className='modal-dialog'>
                        <div className='modal-content'>
                          <div className='modal-header'>
                            <h5
                              className='modal-title font-weight-bold'
                              id='exampleModalLabel'
                              style={{
                                textTransform: 'uppercase',
                              }}
                            >
                              <b>{el.title}</b>
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
                              <img
                                className='img-fluid'
                                src={el.contest_pic}
                                alt='contest_image'
                              />
                              <p>
                                <b>Description:</b> {el.description}
                              </p>
                              <p>
                                <span>
                                  {/* <FcCalendar /> */}
                                  <b>Started on:</b>{' '}
                                  {el.start_time.slice(0, 10)}
                                </span>
                              </p>
                              <p>
                                <span>
                                  {/* <FcCalendar /> */}
                                  <b>Ends on:</b> {el.end_time.slice(0, 10)}
                                </span>
                              </p>
                              <p>
                                <span>
                                  {/* <GiTargetPrize /> */}
                                  <b>Prize to Won:</b> <strong>$</strong>
                                  {el.prize}
                                </span>
                              </p>
                              <p>
                                <b>No of Votes:</b> {el.vote_count}
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
                            {/* <button type='button' className='btn btn-primary'>
                              Join
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })
            ) : (
              <h6>No data found</h6>
            )}
          </div>
        </div>
        <div className='col-md-12 col-sm-12 mt-3 mb-0'>
          <div className='card details'>
            <h4>
              <b>Profile</b>
            </h4>

            {data &&
              data.map((el) => {
                const {
                  first_name,
                  last_name,
                  mobile,
                  date_of_birth,
                  country,
                  paypal,
                  email,
                  region,
                  street,
                  postal_code,
                  uuid,
                } = el;
                return (
                  <div className='card-body' key={uuid}>
                    <p style={{ color: 'grey', fontWeight: '500' }}>
                      {region} - {uuid}
                    </p>
                    <p>
                      Name: {last_name} {first_name}
                    </p>
                    <p>E-mail: {email}</p>
                    <p>Phone: {mobile}</p>
                    <p>Date of Birth: {date_of_birth}</p>
                    <p>Paypal E-mail: {paypal}</p>
                    <p>Zip Code: {postal_code}</p>
                    <p>Street: {street}</p>
                  </div>
                );
              })}
          </div>
        </div>
<br />
        {/* </div> */}
      </div>
    </AboutStyled>
  );
};

const AboutStyled = Styled.div`
  // .card-wrapper{
  //   border: 1px solid transparent;
  //     box-shadow: -1px 2px 9px 1px #00000038;
  // -webkit-box-shadow: -1px 2px 9px 1px #00000038;
  // -moz-box-shadow: -1px 2px 9px 1px #00000038;
  // }

  .card-body p{
    font-weight: 500;
    // color: grey;
    text-trransform: capitalize;
  }
`;

export default About;
