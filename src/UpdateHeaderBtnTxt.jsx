import React,{useState} from 'react'
import axios from 'axios';


const UpdateHeaderBtnTxt = () => {

    const [btnText, setBtnText] = useState("");

  const handleChange = (e) => {
    setBtnText(e.target.value);
    
  }

 const handleClick = async()=>{
     const res = await axios.post("https://assessmentbackend.onrender.com/admin/updateHeaderBtnText",{
        newHeaderBtnText:btnText
     })
     console.log(res.data);
     alert("Successfully changed header BtnText")
    //  setBtnText("");
 }


  return (

    <div>
      <input type='text' value={btnText} onChange={handleChange} />
      <button onClick={handleClick}>Change Button Text</button>
    </div>
    
  )
}

export default UpdateHeaderBtnTxt