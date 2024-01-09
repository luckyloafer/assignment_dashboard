import logo from './logo.svg';
import './App.css';
import Emails from './Emails';
import UpdateNavLogo from './UpdateNavLogo';
import UpdateHeaderBtnTxt from './UpdateHeaderBtnTxt';
function App() {
  return (
    <div className='dashboard'>
      <div className='dashboard-sections'> 
      <text>NOTE: we can update custom logos after hosting in AWS</text>
        <UpdateNavLogo />
        <UpdateHeaderBtnTxt />
        <Emails />
      </div>

    </div>
  );
}

export default App;
