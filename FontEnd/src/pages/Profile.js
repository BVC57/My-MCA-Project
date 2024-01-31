import React from 'react';
import { Grid, Box, Alert } from "@mui/material";
import ActionIcon from "src/assets/svg/actionIcon";
import './p.css';
const Profile = () => {

    function send(e){
        alert("Its Danger Are You Sure? For Logout System");
    }


  return (
    <>
    <div className='main'>
        <h1>Profile Setting </h1>
        <hr/>
        <div className='uinfo'>
            <table>
                <tr>
                    <td>User Name:</td>
                    <td>bhadresh</td>
                    <td> <Box onClick={(e)=>alert("Its Danger Are You Sure? For Edit Profile")} className="editIconAction"><ActionIcon /></Box></td>
                </tr>
                <tr>
                    <td>User Password:</td>
                    <td>bvc123</td>
                    <td> <Box onClick={(e)=>alert("Its Danger Are You Sure? For Edit Profile")} className="editIconAction"><ActionIcon /></Box></td>
                </tr>
                <tr>
                    <td>User Id:</td>
                    <td>5</td>
                    <td> <Box onClick={(e)=>alert("Its Danger Are You Sure? For Edit Profile")} className="editIconAction"><ActionIcon /></Box></td>
                </tr>
                <tr>
                    <td>User Email:</td>
                    <td>bvc@123gmail.com</td>
                    <td> <Box onClick={(e)=>alert("Its Danger Are You Sure? For Edit Profile")} className="editIconAction"><ActionIcon /></Box></td>
                </tr>
                <tr>
                    <td>User Type:</td>
                    <td>Admin</td>
                    <td> <Box onClick={(e)=>alert("Its Danger Are You Sure? For Edit Profile")} className="editIconAction"><ActionIcon /></Box></td>
                </tr>
                <tr>
                    <td>User Permmison:</td>
                    <td>Allow</td>
                    <td> <Box onClick={(e)=>alert("Its Danger Are You Sure? For Edit Profile")} className="editIconAction"><ActionIcon /></Box></td>
                </tr>
            </table>
           
           
        </div>
        <button onClick={send}>Logout</button>
    </div>
    
    </>
  )
}

export default Profile