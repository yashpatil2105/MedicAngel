import NavBar from "../NavBar/NavBar";

const contactus=()=>{
   return(<div>
    <NavBar></NavBar>
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
    <section class="mb-4">
    
      
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
       
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
    
        <div class="row">
    
           
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
    
                   
                    <div class="row">
    
                      
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control"/>
                                <label for="name" class="">Your name</label>
                               
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="email" class="form-control"/>
                                <label for="email" class="">Your email</label>
                                
                            </div>
                        </div>
                        
                    </div>
               
              
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" class="form-control"/>
                                <label for="subject" class="">Subject</label>
                            </div>
                        </div>
                    </div>
 
                    <div class="row">
    
                        
                        <div class="col-md-12">
    
                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                <label for="message">Your message</label>
                            </div>
    
                        </div>
                    </div>
                   
    
                </form>
    
                <div class="text-center text-md-left">
                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                </div>
                <div class="status"></div>
            </div>

            <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i ></i>
                        <p>Pune, Akurdi, India</p>
                    </li>
    
                    <li><i ></i>
                        <p>+ 1800 234 567 89</p>
                    </li>
    
                    <li><i ></i>
                        <p>contact@medicangel.com</p>
                    </li>
                </ul>
            </div>
           
    
        </div>
    
    </section>
    </div>
    </div>
    \</div>)
}
export default contactus;