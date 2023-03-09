
import NavBar from "../NavBar/NavBar";

const Feedback = () => {

    return (<div>
        <NavBar></NavBar>
        <ul className='u'>
            <li className='l'><a href="/user/profile" style={{ paddingLeft: "40px", textAlign: "left" }}>Profile</a></li>
            <li className='l'><a href="/user/campaign" style={{ paddingLeft: "40px", textAlign: "left" }}>Campaign</a></li>
            <li className='l'><a href="/user/add/campaign"  style={{ paddingLeft: "40px", textAlign: "left" }}>Create Campaign</a></li>
            <li className='l'><a href="/feedback" className="active"style={{ paddingLeft: "40px", textAlign: "left" }}>FeedBack</a></li>
            <li className='l'><a href="/about" style={{ paddingLeft: "40px", textAlign: "left" }}>About</a></li>
        </ul>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6">

                <h2 class="h1-responsive font-weight-bold text-center my-4">Feedback</h2>

                <p >Did you achive your Goal?</p>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2"><button className="btn btn-primary">YES</button></div>
                    <div className="col-md-2"><button className="btn btn-primary">Partially</button></div>
                    <div className="col-md-2"><button className="btn btn-primary">NO</button></div>
                </div>     <p class="text-center w-responsive mx-auto mb-5"></p>
                <p > Please give feedback to improve website.</p>
                <div class="row">

                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" id="name" name="name" class="form-control" />
                            <label for="name" class="">Your name</label>
                        </div>

                        <div class="col-md-6">
                            <input type="text" id="email" name="email" class="form-control" />
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-12">
                            <input type="text" id="subject" name="subject" class="form-control" />
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your FeedBack</label>
                        </div>
                    </div>

                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status">
                    </div>
                </div>

            </div>
        </div>
    </div>)
}
export default Feedback;