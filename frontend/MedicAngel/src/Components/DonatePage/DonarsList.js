import { React, useState, useEffect } from 'react';
import userService from '../../services/user.service';
import './style.css';


const DonarsList = props => {

    const { setPopUpDonars } = props;
    const { noOfDonar } = props;
    const { id } = props;
    const [donars, setDonars] = useState([]);

    useEffect(() => {
        userService.getDonars(id).then((response) => {
            setDonars(response.data);
            console.log('success', response.data);
        })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    }, []);


    return (
        <div className="PopUpList">
            <div className="form">
                <br></br>
                <div className='row'>

                  
                    <div className='col md-10' style={{ textAlign: "right" }}>Number of donar {noOfDonar}</div>
                    <div className='col md-1'>  <button onClick={() => setPopUpDonars(false)} style={{ color: "red" }}>close</button></div>
                </div>
               
               <div>
        
                    
                        <table>
                            
                        <tbody>
                                <tr>
                                    <th>Donar Name</th>
                                    <th >Amount</th>
                                </tr>
                              
                               
                                {donars.map((donar) => (

                                    <tr>
                                        <td>{donar.name}</td>
                                        <td>Rs. {donar.amount}</td>
                                    </tr>

                                ))}
                            </tbody>
                           
                        </table>
                </div>
                <br></br>

                <br></br>
            </div>
        </div>
    );
}

export default DonarsList;
