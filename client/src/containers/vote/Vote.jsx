import React, { useEffect, useState } from "react";
import axios from "axios";
const Vote = () => {
  let user_id, contest_id;
  let [voteCounter, setVoteCount] = useState(1);
  let [contestDetails, setContest] = useState([]);

  const increament = () => {
    if (voteCounter >= 5) return setVoteCount(5);
    return setVoteCount(voteCounter++);
  };

  const decrement = () => {
    if (voteCounter <= 1) return setVoteCount(1);
    return setVoteCount(voteCounter--);
  };

  const vote=()=>{

  }

  useEffect(async () => {
    user_id = parseInt(window.location.search.split("$")[0].split("?")[1]);
    contest_id = parseInt(window.location.search.split("$")[1]);

    try {
      const { data } = await axios.post(`/api/auth/getSingleContestantById/`, {
        user_id,
        contest_id,
      });
      setContest(data.msg);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container" id="contest" style={{ marginTop: "50px" }}>
      <center>
        {
          contestDetails ? contestDetails.map((items )=>{
            return (
              
        <div className="card mt-20" style={{ width: "40rem" }}>
          <img className="card-img-top" src={items.contest_pic} alt="Contestant Profile Image" />
          <div className="card-body" style={{ textAlign: "left" }}>
            <small>{items.uuid} - {items.region} </small>
            <h5>{items.first_name+"  "+ items.last_name} </h5>

            <h6> {items.vote_count} Vote(s) </h6>
            <p> Vote for this Contestant</p>

            <div>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  Number of votes to cast address
                </label>
                
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter number of votes"
                  min={1}
                  max={5}
                  minLength="1"
                  maxLength="5"
                  required
                  value={voteCounter}
                  readOnly
                />

              </div>
              <div>
                <button
                  onClick={() => increament()}
                  className="btn btn-danger"
                  style={{
                    display: "inline",
                    marginTop: "15px",
                    fontWeight: "bold",
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-info text-white"
                  onClick={() => decrement()}
                  style={{
                    display: "inline",
                    float: "right",
                    marginTop: "15px",
                    fontWeight: "bold",
                  }}
                >
                  -
                </button>
              </div>

              <button
                className="btn btn-success w-100"
                style={{ marginTop: "15px" }}
                onClick={()=>vote(items)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
          )
          }): <h1> No Data Found for this user</h1>
        }
      </center>
    </div>
  );
};

export default Vote;
