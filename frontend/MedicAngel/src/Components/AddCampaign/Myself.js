import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState } from 'react';
import pojo from '../../services/pojo';
const Myself = (props) => {

  const [name, setFirstname] = useState('');
  const [age, setAge] = useState();
  const [gender, setGender] = useState(null);
  const [city, setCity] = useState('');
  const [mobileNo, setMobileno] = useState('');

  const [g,setG] = useState(null);
  const myself = {
    name,
    gender,
    age
  };

  const onlick = (myself) =>{
    console.log(myself);
    if(gender==null){
       setG("Please Select Gender")
    }else{
    pojo.setBenificary(myself,1);
    props.sendToParent(6)
    }
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
          <div className="col-md-2" >
            <label htmlFor='firstName' style={{ textAlign: "right", color: "GrayText", fontWeight: "inherit" }} >First Name</label>
          </div>
          <div className="col-md-5">
            <input
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder='Enter first name'
              style={{ color: "black" }}
            />
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-1" ></div>
          <div className="col-md-2">
            <label htmlFor='age' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Age</label>
          </div>
          <div className="col-md-5">
            <input
              type='number'
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
            {g}
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
              type='tel'
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
            <button  onClick={() =>{ onlick(myself)}}className='btn btn-primary' >Next&nbsp;<i className="fa fa-arrow-right"></i></button>
          </div>
        </div>

        <br></br>
      </form>
      <hr />

    </div>
  </div>)
}
export default Myself;