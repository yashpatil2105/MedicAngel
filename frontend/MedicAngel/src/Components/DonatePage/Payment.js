import  { React,useState } from 'react';
import userService from '../../services/user.service';
// styling
import './style.css';


const Payment = props => {

    const { setPopUp } = props;
    const { id } = props;
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobileNo,setMobileNo] = useState("");
    const [amount,setAmount] = useState();

    const donar ={
        name,
        email,
        mobileNo,
        amount
    }

    const paymentDetails = () => {

      console.log("id" + id)
      console.log(donar)
      userService.donarPayment(donar,id);
     
      setPopUp(false);
    }

    return (
        <div className="PopUp">
            <div className="form">
                <br></br>
                <div className='row'>
                    <div className='col md-11'></div>
                    <div className='col md-1'>  <button onClick={() => setPopUp(false)} style={{color:"red"}}>close</button></div>
                </div>
               <br></br>
                <div className='row'>
                    <div className='col md-2'> <label htmlFor='name'>Name</label></div>
                    <div className='col md-6'> <input type="text" id='name'  value={name}
            onChange={(e) => setName(e.target.value)}></input>  </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col md-2'> <label htmlFor='email'>Email</label></div>
                    <div className='col md-6'>  <input type="text" id='email'  value={email}
            onChange={(e) => setEmail(e.target.value)}></input>  </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col md-2'> <label htmlFor='mobileNo'>Mobile No</label></div>
                    <div className='col md-6'>  <input type="text" id='mobileNo'  value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}></input>  </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col md-2'><label htmlFor='amount'>Amount</label></div>
                    <div className='col md-6'><input type="text" id='amount'  value={amount}
            onChange={(e) => setAmount(e.target.value)}></input> </div>
                </div>
                <br></br>
                <div className="button-container">
                <button className="btn btn-primary" onClick={() => paymentDetails()}> Payment </button>
            </div>
            <br></br>
            </div>

        </div>
    );
}

export default Payment;
