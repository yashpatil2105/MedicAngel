import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar'
import { useState, useEffect } from 'react';
import userService from '../../services/user.service';
import './style.css';
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { Markup } from 'interweave';
import wappshare from './wappshare.png'
import FaceBook from './FaceBook.png'
import { FacebookShareButton } from 'react-share';
import Payment from './Payment';
const DonationPage = () => {

    const [campaign, setCampaign] = useState({});
    const { id } = useParams()
    const [popUp, setPopUp] = useState(false)
    const duringPopUp = popUp ? "during-popup" : ""
    const isComplete = (campaign.currentAmount===campaign.amount) ? false : true;
        
    

    const progress = ((campaign.currentAmount*100)/campaign.amount).toPrecision(3);
    useEffect(() => {
        userService
            .getDonatePage(id)
            .then((user) => {
                setCampaign(user.data);
                console.log('success', user.data);
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    }, []);

    return (<div className="bff">
        <NavBar></NavBar>
      
            <div className={`container emp-profile ${duringPopUp}`} >
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img" style={{ marginBottom: "10px" }}>
                            <img src={`http://localhost:8080/${id}/image`} alt="" />
                            <div className="profile-work">
                                <p></p>

                                <a href="">Donate to Complete Goal</a><br />
                                <a href="">No of Donar : {campaign.noOfDonar}</a><br />
                                {/*  <a href="">Bootsnipp Profile</a><br />
                                <a href="">Bootply Profile</a>
                                <p>SKILLS</p>
                                <a href="">Web Designer</a><br />
                                <a href="">Web Developer</a><br />
                                <a href="">WordPress</a><br />
                                <a href="">WooCommerce</a><br />
                                <a href="">PHP, .Net</a><br /> */}
                            </div>
                      {isComplete?(
                            <button className='btn btn-primary' onClick={() => setPopUp(true)}>Donate</button>
                         ):(<b style={{color:"black"}}>Goal Completed</b>)
                        }
                            {popUp && <Payment setPopUp={setPopUp} id={id}/>}
                      
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="profile-head">
                            <h5>
                                {campaign.title}
                            </h5>
                            <h6>

                            </h6>
                            <p className="proile-rating">  Raised : <span>Rs. {campaign.currentAmount}</span> of Rs. {campaign.amount}
                            <span><ProgressBar now={progress} animated striped variant="success" label={`${progress}%`} /></span></p>
                            <br></br>
                            <div className="row">
                                <div className="col-md-6">
                                    <a href={`https://web.whatsapp.com/send?text=%2A${campaign.title}.%2A%0A%0A%20${campaign.story}.%20%0A%0A%20%2AAll%20INR%20donations%20towards%20this%20cause%20will%20save%20%20life%20or%20help.%20%2A%20%0A%0ARead%20more%20-%20https%3A%2F%2Fmedicangel.org%2Ffundraisers%2Fsupport%3Futm_source%3Dwhatsapp%26utm_medium%3Dfundraisers-title%26campaign_id%2F${id}%0A%0ADonate%20-%20http%3A%2F%2Flocalhost%3A3000%2Fdonationpage%2F${id}`} className="gtm-whatsapp-share-- whatsapp-cta whatsapp-share-btn" data-text="Please Help Me In Saving My Little One's Life" data-link="https://medicangel.org/fundraisers" target="_blank">
                                        <img src={wappshare} style={{ height: "50px", maxWidth: "100%", marginBottom: "20px" }} />
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <FacebookShareButton
                                            url={`https://www.medicangel.com/campgain/${id}`}
                                            quote={campaign.title}
                                            hashtag="#save"
                                        >
                                            <img src={FaceBook} style={{ height: "50px", maxWidth: "100%" }} />
                                        </FacebookShareButton>
                                    </div>
                                </div>
                            </div>



                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Story</a>
                                </li>
                            </ul>
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>

                            <div className="row">
                                <div className="col-md-12" style={{ textAlign: "justify" }}>
                                    <Markup content={campaign.story} />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt leo at leo molestie pulvinar at vitae erat. Curabitur tempus congue metus sed tempor. Duis a risus eleifend nibh ullamcorper rutrum gravida vel libero. Mauris id magna interdum tortor dapibus dictum ut at nulla. Etiam non erat eleifend, porta justo id, semper orci. Curabitur non malesuada purus. In et nibh ut turpis feugiat tincidunt id lacinia nibh. Sed commodo urna vel elit sagittis consequat. Phasellus scelerisque urna tincidunt, fermentum massa sit amet, convallis ex. Curabitur tristique sagittis nunc, sed volutpat sem. Vivamus cursus rutrum nibh. Sed eros ex, lacinia eget hendrerit ut, pulvinar ut justo. Curabitur eget dignissim leo. Sed felis purus, scelerisque eget nibh consectetur, ornare accumsan lorem. Vivamus neque enim, lobortis quis nisi ac, varius hendrerit nulla.

                                    Nam a sem a metus placerat volutpat at nec dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non vehicula nisl, vel sollicitudin est. Aliquam sed sapien viverra, scelerisque justo a, dictum enim. Quisque elementum erat eu risus tincidunt, et ullamcorper ipsum placerat. Aenean fringilla rhoncus felis aliquet malesuada. Aliquam vitae velit nec mi condimentum vestibulum dignissim non nisi.
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid bg-black text-light border-secondary" style={{ margin: "0", paddingBottom: "12px" }}>
                <div className="container">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0" >&copy; <a className="text-primary" href="/" >Medic Angel</a>. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
      
    </div>)
}
export default DonationPage;


