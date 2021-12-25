import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/dashboardnew/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { contestAction } from "../../store/action/contest.action";

const Contest = () => {

  let dispatch = useDispatch();
  let contest = useSelector((state) => state.contest);
  let userID =  useSelector((state) => state.login.user.id);

  let { contestList } = contest;
  let [contestDetails, setContestDetails] = useState([] || "");
  let [show, setShow] = useState(false);

  const viewContest = (el) => {
    setContestDetails(el);
    setShow(true);
  };



  const checkDate = async (date, id) => {
    console.log("Date to be validated ", date)
    var today = new Date();
    var due_date = new Date(date);
    console.log("due date to validate ", today, due_date)
    
    if (due_date < today) {
      setShow(true);
      setContestDetails({description:"This contest has expired"});
    }

    else {
      let body ={
        user_id: userID,
        contest_id: id,
      }
      try {
        const { data } = await axios.post(`/api/auth/addContestant/`, {body});
        console.log("constenstate data ", data);
        setContestDetails({description: "You have successfully joined this contest"})
        setShow(true)
      } catch (err) {
        console.log(err);
        setContestDetails({description: "Network Error, try again"})
        setShow(true)
      }
    }
  };

  useEffect(() => {
    dispatch(contestAction());
  }, []);
  
  return (
    <Fragment>
      <Sidebar />
      <div id="contest mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contest-header mt-3 mb-4">
                <h1>Available Contest</h1>

                {contestDetails && show == true ? (
                  <>
                    <h6>
                      
                      Status of Contest
                      <button
                        onClick={() => setShow(false)}
                        className="btn btn-sm btn-danger"
                      >
                        Hide
                      </button>
                      <br /> {contestDetails.description}
                    </h6>
                  </>
                ) : (
                  ""
                )}

                <div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col"> Id </th>
                        <th scope="col"> Title</th>
                        <th scope="col"> Price</th>
                        <th scope="col"> Start</th>
                        <th scope="col"> End</th>
                        <th scope="col"> Actions </th>
                      </tr>
                    </thead>

                    {contestList
                      ? contestList.map((el) => {
                          return (
                            <tbody>
                              <tr>
                                <th scope="row"> {el.id} </th>
                                <td>{el.title}</td>
                                <td>{el.prize}</td>
                                <td>{el.start_time.slice(0, 10)}</td>
                                <td>{el.end_time.slice(0, 10)}</td>
                                <td>
                                  <button className="btn btn-md btn-primary"  onClick={() => viewContest(el)}>
                                    Details
                                  </button>

                                  <button className="btn btn-md btn-success" onClick={()=>checkDate(el.end_time, el.id)}>
                                    Join
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })
                      : ""}
                  </table>
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
