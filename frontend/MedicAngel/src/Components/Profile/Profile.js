import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState, useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import userService from '../../services/user.service';
import NavBar from '../NavBar/NavBar';
const Profile = (props) => {
 
  const [id, setId] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [alternateEmail, setAlternateEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [mobileNo, setMobileno] = useState('');
  const [pincode, setPincode] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  var isCustomer = false
  if(role=='ROLE_CUSTOMER'){
     isCustomer = true;
  }
  
  sessionStorage.setItem("name", JSON.stringify(firstName));


  

  const saveuser = (e) => {
    e.preventDefault();
    const user = {
      id,
      firstName,
      lastName,
      email,
      alternateEmail,
      address,
      city,
      state,
      mobileNo,
      pincode,
      country,
      role
    };

    userService
      .updateUser(user)
      .then((response) => {
        setMessage("Updated successfully")
        console.log('User data updated successfully', response.data);
      })
      .signup((error) => {
        alert(error.response.status);
        console.log('Error code ' + error);
        console.log('Something went wrong', error.response.data);
      });

  }

  useEffect(() => {
    userService
      .getUser()
      .then((user) => {
        setId(user.data.id);
        setFirstname(user.data.firstName);
        setLastname(user.data.lastName);
        setEmail(user.data.email);
        setAlternateEmail(user.data.alternateEmail);
        setAddress(user.data.address);
        setCity(user.data.city);
        setState(user.data.state);
        setCountry(user.data.country);
        setMobileno(user.data.mobileNo);
        setPincode(user.data.pincode);
        setRole(user.data.role);
        
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });

  }, []);

  return (<div>
    <NavBar></NavBar>

    <ul className='u'>
      <li className='l'><a href="/user/profile" class="active" style={{paddingLeft:"40px" , textAlign:"left"}}>Profile</a></li>
      { isCustomer ? (
               <>
               <li className='l'><a href="/user/campaign" style={{paddingLeft:"40px" , textAlign:"left"}}>Campaign</a></li>
               <li className='l'><a href="add/campaign" style={{paddingLeft:"40px" , textAlign:"left"}}>Create Campaign</a></li>
               <li className='l'><a href="/feedback" style={{paddingLeft:"40px" , textAlign:"left"}}>FeedBack</a></li>
               </>
      ):(
        <>
        <li className='l'><a href="/admin/newcampaign" style={{paddingLeft:"40px" , textAlign:"left"}}>New Campaign</a></li>
        <li className='l'><a href="/admin/approvedcampaign" style={{paddingLeft:"40px" , textAlign:"left"}}>Approved Campaign</a></li>
        <li className='l'><a href="/" style={{paddingLeft:"40px" , textAlign:"left"}}>FeedBack</a></li>
        </>
      )}

      <li className='l'><a href="/about" style={{paddingLeft:"40px" , textAlign:"left"}}>About</a></li>
    </ul>

    <div className="innerdis" style={{}}>
      {/* {JSON.stringify(user)} */}
      <div className='container-sm' >
        <br></br>
        <h3 style={{ align: "left" }}>Edit Profile</h3>
        <br></br>
        <form style={{ color: "black" }}>
          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2" >
              <label htmlFor='firstName' style={{ textAlign: "right", color: "GrayText", fontWeight: "inherit" }} >First Name</label>
            </div>
            <div class="col-md-2">
              <input
                type='text'
                className='form-control'
                id='firstName'
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder='Enter first name'
                style={{ color: "black" }}
              />
            </div>
            <div class="col-md-2" style={{ textAlign: "right" }}>
              <label htmlFor='lastName' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Last Name</label>
            </div>
            <div class="col-md-2" >
              <input
                type='text'
                className='form-control'
                id='lastName'
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                placeholder='Enter last name'
                style={{ color: "black" }}
              />

            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2" >
              <label htmlFor='email' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Email</label>
            </div>
            <div class="col-md-5">
              <input
                type='text'
                className='form-control col-4'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email'
                style={{ color: "black" }}
              />
            </div>
            <div class="col-md-3"></div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2" >
              <label htmlFor='alternateEmail' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Alternate email</label>
            </div>
            <div class="col-md-5">
              <input
                type='text'
                className='form-control col-4'
                id='alternateEmail'
                value={alternateEmail}
                onChange={(e) => setAlternateEmail(e.target.value)}
                placeholder='Enter Alternate Email'
                style={{ color: "black" }}
              />
            </div>
            <div class="col-md-4"></div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2" >
              <label htmlFor='Address' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Address</label>
            </div>
            <div class="col-md-5">
              <input
                type='text'
                className='form-control col-4'
                id='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder='Enter Address'
                style={{ color: "black" }}
              />
            </div>
            <div class="col-md-4"></div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2">
              <label htmlFor='mobileno' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Mobile Number</label>
            </div>
            <div class="col-md-5">
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
            <div class="col-md-4"></div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2" >
              <label htmlFor='City' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >City</label>
            </div>
            <div class="col-md-5">
              <input
                type='text'
                className='form-control col-4'
                id='City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Enter City'
                style={{ color: "black" }}
              />
            </div>
            <div class="col-md-4"></div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2" >
              <label htmlFor='State' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >State</label>
            </div>
            <div class="col-md-5">
              <input
                type='text'
                className='form-control col-4'
                id='State'
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder='Enter State'
                style={{ color: "black" }}
              />
            </div>
            <div class="col-md-4"></div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2" >
              <label htmlFor='Country' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Country</label>
            </div>
            <div class="col-md-5">
              <input
                type='text'
                className='form-control col-4'
                id='Country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder='Enter Country'
                style={{ color: "black" }}
              />
            </div>
            <div class="col-md-4"></div>
          </div>
          <br></br>

          <div class="row">
            <div class="col-md-1" ></div>
            <div class="col-md-2" >
              <label htmlFor='pincode' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >Pincode</label>
            </div>
            <div class="col-md-5">
              <input
                type='text'
                className='form-control col-4'
                id='pincode'
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder='Enter Pincode'
                style={{ color: "black" }}
              />
            </div>
            <div class="col-md-4"></div>
          </div>
          <br></br><br></br>


          <div class="row">
            <div class="col-md-2" ></div>
            <div class="col-md-2" >
              <button onClick={saveuser} className='btn btn-primary'>
                Update
              </button>
            </div>
            <div class="col-md-2" style={{color:"Green"}}>{message}</div>
          </div>
          <br></br>
        </form>
        <hr />
      </div>
    </div>
  </div>)
}
export default Profile;


