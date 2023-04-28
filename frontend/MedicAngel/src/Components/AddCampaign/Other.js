import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState } from 'react';
import pojo from '../../services/pojo';
const Other = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState('MALE');
    const [mobileNo, setMobileno] = useState('');

    const other = {
        name,
        address,
        city,
        age,
        mobileNo,
        gender
    };

    const onlick = (other) => {
        pojo.setBenificary(other, 4);
    }

    return (<div>

        <div className='container-sm' >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <br></br>
            <h3 style={{ align: "left" }}>Beneficiary Details</h3>
            <br></br>
            <form style={{ color: "black" }}>
                <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2">
                        <label htmlFor='name' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Name</label>
                    </div>
                    <div className="col-md-5">
                        <input
                            type='text'
                            className='form-control col-4'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter Name'
                            style={{ color: "black" }}
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2">
                        <label htmlFor='age' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Age</label>
                    </div>
                    <div className="col-md-5">
                        <input
                            type='text'
                            className='form-control col-4'
                            id='age'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder='Enter Age'
                            style={{ color: "black" }}
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>



                <br></br>
        <div className="row">
          <div className="col-md-1" ></div>
          <div className="col-md-2">
            <label htmlFor='gender' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Gender</label>
          </div>
          <div className="col-md-5">

            <select id="gender" className='form-control col-4' placeholder='Enter Gender' onClick={(e) => setGender(e.target.value)} style={{ color: "black" }}>
              <option value="null" >Choose Gender</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="OTHER">OTHER</option>
            </select>

          </div>
          <div className="col-md-4"></div>
        </div>
                <br></br>
                <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2">
                        <label htmlFor='address' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Address</label>
                    </div>
                    <div className="col-md-5">
                        <input
                            type='text'
                            className='form-control col-4'
                            id='address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder='Enter Address'
                            style={{ color: "black" }}
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2">
                        <label htmlFor='mobileno' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Mobile Number</label>
                    </div>
                    <div className="col-md-5">
                        <input
                            type='text'
                            className='form-control col-4'
                            id='mobileno'
                            value={mobileNo}
                            onChange={(e) => setMobileno(e.target.value)}
                            placeholder='Enter Mobile Number'
                            style={{ color: "black" }}
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <br></br>

                <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2" >
                        <label htmlFor='city' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >City</label>
                    </div>
                    <div className="col-md-5">
                        <input
                            type='text'
                            className='form-control col-4'
                            id='city'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='Enter City'
                            style={{ color: "black" }}
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <br></br><br></br>
                <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2" >
                        <button onClick={() => { props.sendToParent(1) }} className='btn btn-primary' style={{ textAlign: "left" }}><i className="fa fa-arrow-left"></i>&nbsp;Back</button>
                    </div>
                    <div className="col-md-5" >
                        <button onClick={() => { onlick(other); props.sendToParent(6) }} className='btn btn-primary' >Next&nbsp;<i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
                <br></br>
            </form>
            <hr />
        </div>
    </div>)
}
export default Other;