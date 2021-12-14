import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


const About = () => {
  
  let userID =  useSelector((state) => state.login.user.id);

  let [contest, setContest] = useState([]);

  const CopyLink=(el)=>{
    var copyText = document.createElement("input");
      copyText.value = window.location.origin + "/vote" +  `/id?${userID}pZPY$${el.cid}hDZP`
      console.log("Link to copy ", copyText.value);
      document.body.appendChild(copyText)
      copyText.select();
      copyText.setSelectionRange(0,9999);
      document.execCommand("copy")
      alert(` ${copyText.value} \n Link copy to clipboard`)
      document.body.removeChild(copyText)
  }

  useEffect( async ()=>{
    try {
      const { data } = await axios.post(`/api/auth/getContestantById/`, {user_id: userID});
      setContest(data.msg)
    } catch (err) {
      
    }
  }, [])
    return (
      <div className='container'>
        <div className='row d-flex'>
        <div className='col-md-6 col-sm-6'>
            <div className='card details'>
              {
                contest ? contest.map(el =>{
                  return (
                    <>
                    <div style={{marginBottom: "20px"}}>
                    <p style={{display: "inline"}}>{el.title} Contest</p>
                    <button onClick={()=>CopyLink(el)}
                    className="btn btn-md btn-success" style={{display: "inline", float: "right"}}> Copy</button>

                    </div>
                    </>
                  )
                }) : <h6>No data found</h6>
              }
              
            </div>
          </div>

          <div className='col-md-6 col-sm-6'>
            <div className='card details'>
              <p>First Name:</p>
              <p>First Name:</p>
              <p>First Name:</p>
              <p>First Name:</p>
              <p>First Name:</p>
              <p>First Name:</p>
            </div>
          </div>

         

        </div>
      </div>
    );
}

export default About
