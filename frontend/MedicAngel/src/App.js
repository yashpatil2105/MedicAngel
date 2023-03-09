import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Components/LoginPage/LoginPage';
import AuthenticatedRoute from './Components/LoginPage/AuthenticatedRoute';
import HomePage from './Components/HomePage/HomePage';
import AddUser from './Components/AddUser/AddUser'
import Profile from './Components/Profile/Profile'
import DonationPage from './Components/DonatePage/DonationPage'
import Campaign from './Components/Campaign/Campaign'
import Overviewcampaign from './Components/OverviewCampaign/Overviewcampaign'
import Donate from './Components/Donate/Donate'
import AddCampaign from './Components/AddCampaign/AddCampaign'
import NavBar from './Components/NavBar/NavBar';
import Newcampaign from './Components/Newcampaign/Newcampaign';
import Approvedcampaign from './Components/Approvedcampaign/Approvedcampaign';
import About from './Components/About/About';
import Contactus from './Components/Contactus/Contactus'
import Footer from './Components/Footer/Footer'
import Feedback from './Components/Feedback/Feedback';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/nav" exact render={() => <NavBar></NavBar>}></Route>
          <Route path="/login" exact render={() => <Login></Login>}></Route>
          <Route path="/add/user" exact render={() => <AddUser></AddUser>}></Route>
          <Route path="/donate" exact render={() => <Donate></Donate>}></Route>
          <Route path="/donationpage/:id" render={() => <DonationPage></DonationPage>}></Route>
          <Route path="/about" exact render={() => <About></About>}></Route>
          <Route path="/contact" exact render={() => <Contactus></Contactus>}></Route>
          <Route path="/footer" exact render={() => <Footer></Footer>}></Route>
          
         

          <AuthenticatedRoute exact path='/admin/newcampaign' component={Newcampaign} />
          <AuthenticatedRoute exact path='/admin/approvedcampaign' component={Approvedcampaign} />
          <AuthenticatedRoute exact path='/user/profile' component={Profile} />
          <AuthenticatedRoute exact path='/user/campaign' component={Campaign} />
          <AuthenticatedRoute exact path='/overview/campaign/:id' component={Overviewcampaign} />
          <AuthenticatedRoute exact path='/user/add/campaign' component={AddCampaign}/>
          <AuthenticatedRoute exact path='/feedback' component={Feedback}/>

          
        </Switch>
       
      </Router>

    </div>
  );
}

export default App;


