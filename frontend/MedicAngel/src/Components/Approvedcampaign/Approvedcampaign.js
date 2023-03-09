import { useEffect, useState } from 'react';
import userService from '../../services/user.service';
import NavBar from "../NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Approvedcampaign = (props) => {
  const [campaigns, setCampaigns] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
    userService
      .deleteCampaignbyId(id)
      .then(() => {
        console.log("Delete SuccessFull !!!")
        window.location.reload();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  }




  useEffect(() => {
    userService
      .getActiveCampaign()
      .then((user) => {
        console.log(user.data);
        setCampaigns(user.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  }, []);

  return (<div>
    <NavBar></NavBar>
    <ul className='u'>
      <li className='l'><a href="/user/profile" style={{ paddingLeft: "40px", textAlign: "left" }}>Profile</a></li>

      <li className='l'><a href="/admin/newcampaign" style={{ paddingLeft: "40px", textAlign: "left" }}>New Campaign</a></li>
      <li className='l'><a href="/admin/approvedcampaign" class="active" style={{ paddingLeft: "40px", textAlign: "left" }}>Approved Campaign</a></li>
      <li className='l'><a href="/" style={{ paddingLeft: "40px", textAlign: "left" }}>FeedBack</a></li>

      <li className='l'><a href="/about" style={{ paddingLeft: "40px", textAlign: "left" }}>About</a></li>
    </ul>

    <div className="innerdis" style={{}}>
      <br></br>
      <h3>New Campaign to Review</h3>
      <hr />
      <div>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark' style={{ backgroundColor: "ThreeDDarkShadow", color: "white" }}>
            <tr>
              <th>Created by</th>
              <th>Benificary Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Amount</th>
              <th>End Date</th>
              <th>Ailment</th>
              <th colSpan={3}></th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td>{campaign.ob.firstName + " " + campaign.ob.lastName}</td>
                <td>
                  {(campaign.benificaryRelative != null) ?
                    (campaign.benificaryRelative.relativeName) : ("")}

                  {(campaign.benificaryOther != null) ?
                    (campaign.benificaryOther.name) : ("")}

                  {(campaign.benificaryFriend != null) ?
                    (campaign.benificaryFriend.name) : ("")}

                  {(campaign.benificaryUser != null) ?
                    ("Beneficiary Itself User") : ("")}
                </td>
                <td>{campaign.ob.email}</td>
                <td>{campaign.title}</td>
                <td>Rs. {campaign.amount}</td>
                <td>{campaign.endDate}</td>
                <td>{campaign.ailment}</td>
                {/* <td>

                <button
                   className='btn btn-info'
                    onClick={() => {
                      handleApproval(campaign.id);
                    }}
                  >
                    Approve
                  </button>
                </td> */}

                {/* <td>
                  <Link
                    className='btn btn-info'
                    to={`/uploadImage/${employee.id}`}
                  >
                    Image Upload
                  </Link>
                </td> */}
                <td>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      handleDelete(campaign.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>)
}
export default Approvedcampaign;