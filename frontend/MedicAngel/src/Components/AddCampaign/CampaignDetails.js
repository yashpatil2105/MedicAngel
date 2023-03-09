import pojo from '../../services/pojo';
import { useState } from 'react';

const CampaignDetails = (props) => {

    const [amount, setAmount] = useState();
    const [endDate, setEndDate] = useState('');
    const [hospitalName, setHospital] = useState('');
    const [cityOfHospital, setCityOfHospital] = useState('');
    const [ailment, setAilment] = useState('');

    const campdetail = {
        amount,
        endDate,
        hospitalName,
        cityOfHospital,
        ailment
    }

    return (<div>
        <div className='container-sm' >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <br></br>
            <h3 style={{ align: "left" }}>Campaign Details</h3>

            <div className="campDetail">
                <span>I am raising funds for a medical cause</span>
                <br></br><br></br>

                <span> I want to raise INR &nbsp;
                    <input
                        className="underline-input"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Amount"
                    />
                </span>
                <br></br><br></br>

                <span>by&nbsp;
                    <input
                        type="date"
                        className="underline-input"
                        value={endDate}
                        data-date-format="YYYY MMMM DD"
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="End date">
                    </input>
                </span>
            </div>
            <br></br><br></br>

            <div style={{ textAlign: "center" }}>Hospital name, location and ailment will have to be provided in order to get details of Beneficiary.
            </div>
            <br></br>
            <br></br>

            <div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-2"><label>Hospital Name</label>
                    </div>
                    <div className="col-md-4">
                        <input
                            className="underline-input wd"
                            value={hospitalName}
                            onChange={(e) => setHospital(e.target.value)} >

                        </input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2"> <label>Location</label></div>
                    <div className="col-md-4">
                        <input
                            className="underline-input wd"
                            value={cityOfHospital}
                            onChange={(e) => setCityOfHospital(e.target.value)} >

                        </input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2"><label>Ailment</label></div>
                    <div className="col-md-4">
                        <input
                            className="underline-input wd"
                            value={ailment}
                            onChange={(e) => setAilment(e.target.value)} >
                        </input>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2" >
                        <button onClick={()=>props.sendToParent(1)} className='btn btn-primary' style={{ textAlign: "left" }}><i className="fa fa-arrow-left"></i>&nbsp;Back</button>
                    </div>
                    <div className="col-md-2" >
                    <button onClick={() =>{pojo.setcampDetail(campdetail); props.sendToParent(7)}} className='btn btn-primary'>
                        Next&nbsp;<i className="fa fa-arrow-right"></i>
                    </button>
                    </div>
                </div>
            <br></br>

        </div>
        <hr />
    </div>);
}
export default CampaignDetails;