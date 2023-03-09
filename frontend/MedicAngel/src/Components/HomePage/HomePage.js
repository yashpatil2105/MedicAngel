import "./style.css"
import "./bootstrap.min.css"
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const HomePage = () => {
    return (<div>
        
     <NavBar></NavBar>

        <div className="container-fluid bg-primary py-5  hero-header" style={{padding:"0",margin:"0"}}>
            <div className="container py-5">
                <div className="row justify-content-start">
                    <div className="col-lg-12 text-center text-lg-start" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h5 className="d-inline-block text-black text-uppercase" style={{ color: 'rgb(0, 0, 1)'}} >&nbsp;&nbsp;&nbsp;Welcome To Medic Angel</h5>
                        <h1 className="display-1 mb-xs-2" style={{ color: 'rgb(0, 0, 1)', textAlign:"right" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Medical Crowdfunding is the Best Way to Raise Money for Medical Expenses</h1>
                        <div className="pt-2">
                            <a href="/add/user" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Start A free Fundraiser now</a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <Footer></Footer>
        {/* <div className="container-fluid bg-black text-light border-secondary py-4" style={{ margin:"0" ,padding:"0"}}>
            <div className="container" >
              
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0" >&copy; <a className="text-primary" href="/" >Medic Angel</a>. All Rights Reserved.</p>
                    </div>
            </div>
        </div> */}


    </div>)
}
export default HomePage;



      