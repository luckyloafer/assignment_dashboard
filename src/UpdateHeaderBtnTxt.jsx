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
      <input type='text' placeholder='New Text' value={btnText} onChange={handleChange} style={{borderWidth:5,padding:5}} />
      <button onClick={handleClick} style={{backgroundColor:"lightblue",borderColor:"blue",borderWidth:5,padding:5}}><text style={{fontWeight:"bold"}}>Change Button Text</text></button>
    </div>
    
  )
}

export default UpdateHeaderBtnTxt