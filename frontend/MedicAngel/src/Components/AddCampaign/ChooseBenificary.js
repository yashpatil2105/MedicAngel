import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState, useEffect } from 'react';
const ChooseBenificary = (props) => {

  return (<div>    <h3 style={{ align: "left", margin: "20px", marginBottom: "50px" }}> Select Beneficiary to create Medical fundraisers campaign</h3>
    <div className='container-sm' >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <br></br>
      <form style={{ color: "black" }}>
        <div className="row">
          <div className="col-md-1" ></div>
          <div className="col-md-4">
            <button className="btn btn-b" style={{ width: "300px", align: "right" }} onClick={() => props.sendToParent(2)}><i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp; Myself</button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4" >
            <button className="btn btn-b" style={{ width: "300px", align: "left" }} onClick={() => props.sendToParent(3)}><i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp; Family / Relative</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-1" ></div>
          <div className="col-md-4">
            <button className="btn btn-b" style={{ width: "300px", align: "right" }} onClick={() => props.sendToParent(4)}><i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp; Friend</button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4" >
            <button className="btn btn-b" style={{ width: "300px", align: "left" }} onClick={() => props.sendToParent(5)}><i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp; Other</button>
          </div>
        </div>
        <br></br>
      </form>
    </div></div>)
}
export default ChooseBenificary;