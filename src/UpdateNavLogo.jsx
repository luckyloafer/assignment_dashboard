import React, { useState } from 'react'
import axios from 'axios';

const UpdateNavLogo = () => {

  const [logoURL, setLogoURL] = useState("");

  const handleChange = (e) => {
    setLogoURL(e.target.value);
    
  }

 const handleClick = async()=>{
     const res = await axios.post("https://assessmentbackend.onrender.com/admin/updateNavLogo",{
      newNavLogoURL:logoURL
     })
     console.log(res.data);
     alert("Successfully changed Navbar LOGO")
     setLogoURL("");
 }

 

  return (
    <div>
      
      <input  placeholder="Use public image addresses" type='text' value={logoURL} onChange={handleChange} />
      <button onClick={handleClick}>Change Navbar Logo</button>
    </div>

  )
}

export default UpdateNavLogo