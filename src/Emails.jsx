import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './email.css'
const Emails = () => {

  const [emaildata, setEmailData] = useState([]);

  const getEmailsData = async () => {

    const res = await axios.get("https://assessmentbackend.onrender.com/admin/getEmaildata");
    console.log(res.data);
    setEmailData(res.data[0].email)
    console.log(emaildata)

  }


  useEffect(() => {

    console.log("email component rendered");

    getEmailsData();

  }, [])
  return (
    <div className='email'>
       <h1>Emails from users</h1>
      <ol>
        {emaildata.map((email, i) => {

          return (
            <li>{email}</li>
          )
        })}
      </ol>



    </div>
  )
}

export default Emails