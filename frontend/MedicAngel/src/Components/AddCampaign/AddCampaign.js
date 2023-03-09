import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState, useEffect } from 'react';
import ChooseBenificary from './ChooseBenificary'
import Myself from './Myself'
import Friend from './Friend'
import Other from './Other'
import Relative from './Relative'
import CampaignDetails from './CampaignDetails';
import CampaignDetails2 from "./CampaignDetails2";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const AddCampaign = () => {

  const [PageNo, setPageno] = useState(1);
  const [myself, setMyself] = useState();

  const getPageno=(val) =>{
    console.log(val)
    setPageno(val)
  }

  const sendData = (data) => {
    setMyself(...data)
  }

  const logout = () => {
    sessionStorage.removeItem("user");
  }

  const pageSwitch=(PageNo)=>{
    switch(PageNo){
      case 1:return(<ChooseBenificary sendToParent={setPageno} sendMyself={setMyself}></ChooseBenificary> )
      case 2:return(<Myself sendToParent={setPageno}></Myself>)
      case 3:return(<Relative sendToParent={setPageno}></Relative>)
      case 4:return(<Friend sendToParent={setPageno}></Friend>)
      case 5:return(<Other sendToParent={setPageno}></Other>)
      case 6:return(<CampaignDetails sendToParent={setPageno}></CampaignDetails>)
      case 7:return(<CampaignDetails2 sendToParent={setPageno}></CampaignDetails2>)
    } 
  }
  useEffect(() => {
     console.log(myself);
  }, [myself]);

  return (<div>
   <NavBar></NavBar>

   <ul className='u'>
      <li className='l'><a href="/user/profile" style={{paddingLeft:"40px" , textAlign:"left"}}>Profile</a></li>
      <li className='l'><a href="/user/campaign"   style={{paddingLeft:"40px" , textAlign:"left"}}>Campaign</a></li>
      <li className='l'><a href="/user/add/campaign" className="active" style={{paddingLeft:"40px" , textAlign:"left"}}>Create Campaign</a></li>
      <li className='l'><a href="/feedback" style={{paddingLeft:"40px" , textAlign:"left"}}>FeedBack</a></li>
      <li className='l'><a href="/about" style={{paddingLeft:"40px" , textAlign:"left"}}>About</a></li>
    </ul>
   
    <div className="innerdis" style={{}}>
      <div>
      {console.log("array"+myself)}
     {pageSwitch(PageNo)}
    
      </div>
    </div>
  </div>)
}
export default AddCampaign;