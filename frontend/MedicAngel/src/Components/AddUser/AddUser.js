//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import userService from '../../services/user.service';

const AddUser = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currPassword, setCurrPassword] = useState('');
  const [role, setRole] = useState('');
  const [mobileNo, setMobileno] = useState('');
  const [isInvalid, setIsValid] = useState('false');


  const history = useHistory();
  const { id } = useParams();

  const saveuser = (e) => {
    e.preventDefault();


    const user = {
      firstName,
      lastName,
      email,
      password,
      id,
      role,
      mobileNo
    };


    userService
      .signup(user)
      .then((response) => {
        console.log('user added successfully', response.data);
        history.push('/login');
      })
      .catch((error) => {
        console.log('something went wrong' + error.response);
      });

  };


  return (
    <div className='container-fluid' >
      <br></br>
      <h3>Create your Medic Angel Account</h3>
      <hr />

      <form style={{ color: "black" }}>
        <div class="row">
          <div class="col-md-4">
          </div>
          <div class="col-md-2">
            <input
              type='text'
              className='form-control'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder='Enter first name'
            />
          </div>
          <div class="col-md-2">
            <input
              type='text'
              className='form-control'
              id='lastName'
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              placeholder='Enter last name'
            />
          </div>
          <div class="col-md-4"></div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
            <input
              type='text'
              className='form-control col-4'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email'
            />
          </div>
          <div class="col-md-4"></div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
            <input
              type='password'
              className='form-control col-4'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Password'
            />

          </div>
          <div class="col-md-4"></div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
            <input
              type='password'
              className='form-control col-4'
              id='password'
              value={currPassword}
              onChange={(e) => {
                setCurrPassword(e.target.value);
              }}
              placeholder='Confirm Password'
            />
          </div>
          <div>
            {(password != currPassword && currPassword != '') ? (
              <div style={{ color: "red", textAlign: "center" }}>* Password not match ! please Re-Enter Password</div>
            ) : (<div></div>)}</div>
          <div class="col-md-4"></div>
        </div>
        <br></br>

        <div class="row">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">


            <label htmlFor="role">Choose Role:</label>

            <input style={{ marginLeft: '10px' }} type="radio" name="role" value="ROLE_ADMIN" onChange={(e) => setRole(e.target.value)} />
            &nbsp;Admin
            <input style={{ marginLeft: '10px' }} type="radio" name="role" value="ROLE_CUSTOMER" onChange={(e) => setRole(e.target.value)} />
            &nbsp;Customer

            <div className="invalid-feedback">
              Role is required.
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>



        <br></br>
        <div class="row">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
            <input
              type='text'
              className='form-control col-4'
              id='mobileno'
              value={mobileNo}
              onChange={(e) => setMobileno(e.target.value)}
              placeholder='Enter Mobile No'
            />
          </div>
          <div class="col-md-4"></div>
        </div>
        <br></br>
        <div>
          <button onClick={(e) => saveuser(e)} className='btn btn-primary'>
            Sign Up
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
}

export default AddUser;
