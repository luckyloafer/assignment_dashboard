import logo from './logo.svg';
import './App.css';
import Emails from './Emails';
import UpdateNavLogo from './UpdateNavLogo';
import UpdateHeaderBtnTxt from './UpdateHeaderBtnTxt';
function App() {
  return (
    <div className='dashboard'>
      <div className='dashboard-sections'> 
      <text style={{fontSize:20,color:"red",fontWeight:"bold"}}>NOTE: we can update custom logos after hosting in AWS</text><br/>
        <UpdateNavLogo />
        <br/>
        <UpdateHeaderBtnTxt /><br/>
        <Emails />
      </div>

    </div>
  );
}

export default App;
