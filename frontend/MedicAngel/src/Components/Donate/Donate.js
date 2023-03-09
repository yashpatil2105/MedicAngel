import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import userService from '../../services/user.service';
import NavBar from '../NavBar/NavBar';
import { ProgressBar } from 'react-bootstrap';
const Donate = () => {


    const [campaigns, setCampaigns] = useState([]);
 
    const [camp,setCamp] = useState();
    var page = 1;
    const swap=(item)=>{
        setCamp(item);
        page = 1;
    }

        useEffect(() => {
            userService
                .getDonate()
                .then((user) => {
                    setCampaigns([...user.data]);
                })
                .catch((error) => {
                    console.log('Something went wrong', error);
                });
        }, []);

        return (<div>
            <NavBar></NavBar>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
            {campaigns.map(item => {
                    return (
                        
                        <div className="card" style={{ width: "14rem",padding: "15px", marginLeft: "110px", marginTop: "30px" }}>
                          
                            <a href={`/donationpage/${item.id}`}>
                            <img src={`http://localhost:8080/${item.id}/image`} className="card-img-top"/>
                            <div className="card-body">
                                {/* <h5 className="card-title">{item.name}</h5> */}
                                <p className="card-text">{item.title}</p>
                                <ProgressBar now={((item.currentAmount*100)/item.amount).toPrecision(3)} animated striped variant="success" label={`${((item.currentAmount*100)/item.amount).toPrecision(3)}% Raised`} />
                                <hr></hr>
                                <p className="card-text" style={{textAlign:"right", fontSize:"12px"}}>Till Date : {item.endDate}</p>
                            </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>)
    }
    export default Donate;