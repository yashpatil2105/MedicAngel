import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userService from '../../services/user.service';
import pojo from '../../services/pojo';
const Friend = (props) => {

    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [mobileNo, setMobileno] = useState('');

    const { id } = useParams();

    const logout = () => {
        sessionStorage.removeItem("user");
    }
    const user = {
        email,
        password,
        id,
        role,
        mobileNo
    };

    // const onlick = (myself) => {
    //     pojo.setMyself(myself, 1);
    // }

    // useEffect(() => {

    //     userService
    //         .getUser()
    //         .then((user) => {
    //             setLastname(user.data.lastName);
    //             setEmail(user.data.email);
    //             setPassword(user.data.password);
    //             setRole(user.data.role);
    //             setMobileno(user.data.mobileNo);
    //         })
    //         .catch((error) => {
    //             console.log('Something went wrong', error);
    //         });
    // }, []);

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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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

            <select id="gender" className='form-control col-4' placeholder='Enter Gender'  style={{ color: "black" }}>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        <label htmlFor='City' style={{ align: "right", color: "GrayText", fontWeight: "inherit", verticalAlign: "bottom" }} >City</label>
                    </div>
                    <div className="col-md-5">
                        <input
                            type='text'
                            className='form-control col-4'
                            id='City'
                            onChange={(e) => setRole(e.target.value)}
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
                        <button onClick={() => {  props.sendToParent(6) }} className='btn btn-primary' >Next&nbsp;<i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
                <br></br>
            </form>
            <hr />
        </div>
    </div>)
}
export default Friend;