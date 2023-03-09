import NavBar from "../NavBar/NavBar";

const About=()=>{
    return (<div>
        <NavBar></NavBar>
        
        <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8" style={{textAlign:"justify", color:"black",marginTop:"40px",fontSize:"1.2rem"}}>
        Medical crowdfunding is a type of fundraising that is specifically designed to help individuals who are facing high medical costs. It involves creating a campaign or fundraiser on a crowdfunding platform, such as GoFundMe or Kickstarter, and then asking friends, family, and strangers to donate money to help cover medical expenses.

        Medical crowdfunding websites typically provide a platform where individuals can create a campaign and share their story, along with information about their medical condition, treatment plan, and the costs associated with their care. They may also offer tools and resources to help campaigners reach out to potential donors and promote their fundraiser through social media and other channels.
        
        Some medical crowdfunding websites may specialize in specific types of medical expenses, such as cancer treatment or organ transplants, while others may have a broader focus. In addition, some websites may charge fees for using their platform, while others may be free to use.
        
        It's important to note that while medical crowdfunding can be a helpful tool for those facing high medical costs, it is not a replacement for comprehensive healthcare coverage or government assistance programs. It's always a good idea to explore all options for financing medical care, including insurance, government programs, and other forms of financial assistance.
        </div>
        </div>
        </div>)

}
export default About;