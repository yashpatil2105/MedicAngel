import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState} from 'react';
import pojo from '../../services/pojo';
const Relative = (props) => {

    const [relativeName, setRelativeName] = useState('');
    const [relation, setRelation] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState();
    const [mobileNo, setMobileno] = useState('');

    const relative = {
        relativeName,
        relation,
        gender,
        city,
        mobileNo,
        city
    };

    const onlick = (relative) => {
        pojo.setBenificary(relative, 2);
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
                        <label htmlFor='name' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Relative Name</label>
                    </div>
                    <div className="col-md-5">
                        <input
                            type='text'
                            className='form-control col-4'
                            id='name'
                            value={relativeName}
                            onChange={(e) => setRelativeName(e.target.value)}
                            placeholder='Enter Relative Name'
                            style={{ color: "black" }}
                        />
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2">
                        <label htmlFor='relation' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Relation</label>
                    </div>
                    <div className="col-md-5">
                        <input
                            type='text'
                            className='form-control col-4'
                            id='relation'
                            value={relation}
                            onChange={(e) => setRelation(e.target.value)}
                            placeholder='Enter Relation'
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
                        {/* <a href="/user/campaign" type="button" className='btn btn-primary' onClick={() => onlick(myself) }>Submit</a> */}
                        <button onClick={() => { onlick(relative); props.sendToParent(6) }} className='btn btn-primary' >Next&nbsp;<i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
                <br></br>
            </form>
            <hr />
        </div>
    </div>)
}
export default Relative;