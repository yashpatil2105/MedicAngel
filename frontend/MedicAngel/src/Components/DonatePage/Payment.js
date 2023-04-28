import { React, useState } from 'react';
import userService from '../../services/user.service';
import './style.css';
import { Alert } from 'react-bootstrap';


const Payment = props => {

    const { setPopUp } = props;
    const {id} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [amount, setAmount] = useState();
    const [bool, setBool] = useState(false);
    const [razorpay_payment_id, setPayment_id] = useState("");
    const [razorpay_order_id, setOrder_id] = useState("");



    const paymentDetails = () => {
        if (mobileNo.length != 10) {
            setBool(true);
            return;
        }

        userService.paymentOrder(amount).then((response) => {
               console.log(id)
           
                setOrder_id(response.data.id);
                var options = {
                    key: "rzp_test_qZG2ZZt5Yb7hBG", // Enter the Key ID generated from the Dashboard
                    amount: response.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    currency: "INR",
                    name: "yash",
                    description: "Medic Angel Donation",
                    image: "https://example.com/your_logo",
                    order_id: response.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of step 1
                    //callback_url: "https://localhost:8080/pay/success",
                    handler: function (razorpayResponse) {
                        // console.log(razorpayResponse.razorpay_payment_id);
                        // console.log(razorpayResponse.razorpay_order_id);
                        // console.log(razorpayResponse.razorpay_signature);
                        setPayment_id(razorpayResponse.razorpay_payment_id)
                        if (razorpayResponse.razorpay_payment_id != null) {
                            const donar = {
                                name,
                                email,
                                mobileNo,
                                amount,
                                razorpay_payment_id,
                                razorpay_order_id
                            }
                            console.log(donar)
                            userService.paymentVerify(razorpayResponse,donar,id).then((response)=>{
                                console.log(response.data);
                                if(response.data=="success"){
                                window.location.reload();
                                console.log("success");
                                }
                                else{
                                    Alert("Payment Failed or Not Verified !!!");
                                }
                            })

                        }
                        else {
                            Alert("Payment Failed !!!");
                        }

                    },
                    prefill: {
                        name: name,
                        email: email,
                        contact: mobileNo
                    },
                    notes: {
                        address: "Medic Angel donation"
                    },
                    theme: {
                        color: "#3399cc"
                    }
                };

                var rzp1 = new window.Razorpay(options);
                rzp1.open();


                rzp1.on('payment.failed', function (response) {
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
                })
           
        })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
        setPopUp(false);
    }

    return (
        <div className="PopUp">
            <div className="form">
                <br></br>
                <div className='row'>
                    <div className='col md-11'></div>
                    <div className='col md-1'>  <button onClick={() => setPopUp(false)} style={{ color: "red" }}>close</button></div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col md-2'> <label htmlFor='name'>Name</label></div>
                    <div className='col md-6'> <input type="text" id='name' value={name}
                        onChange={(e) => setName(e.target.value)}></input>  </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col md-2'> <label htmlFor='email'>Email</label></div>
                    <div className='col md-6'>  <input type="text" id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>  </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col md-2'> <label htmlFor='mobileNo'>Mobile No</label></div>
                    <div className='col md-6'>  <input type="text" id='mobileNo' value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}></input>
                        {bool ?
                            <div style={{ color: "red", fontSize: "small" }}>Please Enter valid MobileNo</div>
                            : null}</div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col md-2'><label htmlFor='amount'>Amount</label></div>
                    <div className='col md-6'><input type="text" id='amount' value={amount}
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
