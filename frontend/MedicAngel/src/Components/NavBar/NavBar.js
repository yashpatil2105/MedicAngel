import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";


function NavBar() {
  const loggedIn = sessionStorage.getItem('user') === null ? false : true;
  const name = JSON.parse(sessionStorage.getItem("name"));
  const logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("name")
  }



  return (

    <div className="container-fluid sticky-top bg-white shadow-sm" style={{ width: "100%" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      <div className="container" >
        <nav className="navbar navbar-expand-lg bg-white navbar-light ">
          <a href="/" className="navbar-brand">
            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2">Medic </i>Angel</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto ">
              <a href="/" className="nav-item nav-link">Home</a>
              <a href="/about" className="nav-item nav-link">About</a>
              <a href="/donate" className="nav-item nav-link">Donate</a>
              {/* <a href="/service" className="nav-item nav-link">Service</a> */}
              <a href="/contact" className="nav-item nav-link">Contact</a>
              {!loggedIn && (
                <a href="/login" className="nav-link  mr-4">Login&nbsp;</a>
              )}
              {!loggedIn && (
                <>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</>
              )}
             
              <div className='navbar-nav content-end'>

                {!loggedIn && (
                   
                  <a href="/add/user" style={{ margin: "auto", textAlign: "center" }} className="btn btn-primary  sign-up-btn">Sign up</a>
                )}
                {loggedIn && (
                  <a
                    className='nav-link'
                    onClick={logout} href="/">
                    Logout
                  </a>
                )}
                {loggedIn && (

                  <a
                    className='nav-link'
                    href="/user/profile" >
                    <i class="fa fa-user" style={{ color: "#1bc9e0", width: "30px", marginRight: "20px" }}><b>&nbsp;{name.charAt(0).toUpperCase() + name.slice(1, name.length)}</b></i>
                  </a>

                )}

              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )

}

export default NavBar;