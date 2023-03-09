import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState, useEffect } from 'react';
import userService from '../../services/user.service';
import { ProgressBar } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
const Campaign = () => {

    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        userService
            .getUserCampaign()
            .then((user) => {
                console.log(user.data[0])
                setCampaign([...user.data]);
                console.log(campaign[0].title + "   gfvgbhnjhgt")
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    }, []);

    return (<div>
        <NavBar></NavBar>
        <ul className='u'>
            <li className='l'><a href="/user/profile" style={{ paddingLeft: "40px", textAlign: "left" }}>Profile</a></li>
            <li className='l'><a href="/user/campaign" class="active" style={{ paddingLeft: "40px", textAlign: "left" }}>Campaign</a></li>
            <li className='l'><a href="add/campaign" style={{ paddingLeft: "40px", textAlign: "left" }}>Create Campaign</a></li>
            <li className='l'><a href="/feedback" style={{ paddingLeft: "40px", textAlign: "left" }}>FeedBack</a></li>
            <li className='l'><a href="/about" style={{ paddingLeft: "40px", textAlign: "left" }}>About</a></li>
        </ul>

        <div className="innerdis" >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {campaign.map(item => {
                    return (
                        <div>
                             
                            {item.active?(
                                <div className="card" style={{ width: "13.5rem", padding: "8px", margin: "50px",marginRight:"0px",color:"Black"}}>
                                    <a href={`/overview/campaign/${item.id}`}>
                                    <img src={`http://localhost:8080/${item.id}/image`} className="card-img-top" />
                                    <div className="card-body">
                                        {/* <h5 className="card-title">{item.name}</h5> */}
                                        <p className="card-text">{item.title}</p>
                                        <ProgressBar now={((item.currentAmount*100)/item.amount).toPrecision(3)} animated striped variant="success" label={`${((item.currentAmount*100)/item.amount).toPrecision(3)}% Raised`} />
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <p className="card-text" style={{ textAlign: "right" }}>Till Date :{item.endDate}</p>
                                    </ul>
                                    </a>
                                </div>
                                ): (
                                <div className="card" style={{ width: "13.5rem", padding: "8px", margin: "50px",marginRight:"0px",backgroundColor:"#e31502",color:"white" }}>
                                    <a href={`/overview/campaign/${item.id}`}>
                                <img src={`http://localhost:8080/${item.id}/image`} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">{item.title}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <p className="card-text" style={{ textAlign: "right",fontWeight:"lighter",fontSize:"0.8rem" }}>Till Date :{item.endDate}</p>
                                </ul>
                                <span style={{textAlign:"center",fontWeight:"bolder"}}><i>Approval Pending</i></span>
                                </a>
                            </div>
                             )}

                        </div>
                    )
                })}

            </div>
        </div>

    </div>)
}
export default Campaign;