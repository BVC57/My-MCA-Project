import React from 'react';
import './reg.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reg = () => {

    let navigate = useNavigate();

    const url="http://localhost:999/reg";
    const [data,setdata]=useState({
        fn:"",
        ln:"",
        pn:"",
        ei:"",
        pass:"",
        cpass:"",
        ad:"",
        ct:"",
        st:"",
        cnt:"",
        zc:""
    });

    // const validation=()=>{
    //     alert("ok")
    // }
   

    async function newreg(e){
        alert("register successfull")
        navigate("/login")
        // validation()
        e.preventDefault()
        const fdata=await axios.post(url,data);
        console.log(fdata);
        if(fdata.data.msg==="ok"){
            console.log("Data insert ")
            alert("Registration Successfull")
            navigate("/Login");    
          }else if(fdata.data.msg==="error"){
            alert(fdata.data.data)
          }
          else{
            alert("Error");
          }
    }

    const senduserdata=(e)=>{
        // const ndata={...data};// pasal no data fetch karva mate ... use thay se
        // ndata[e.target.id]=e.target.value;
        // setdata(ndata);
        // console.log(ndata);
        const value=e.target.value;
        setdata({...data,[e.target.id]:value})
        console.log(data)
        
    };

  return (
    <div>
        <div className='heading1'>
            {/* <h1>CONNECT WITH US</h1> */}
            {/* <h3>Sign up and take the first step to stream in harmony.</h3> */}
        </div>
        <div className='userdata'>
            <div className='heading2'>
                <h1>SIGN UP HERE</h1>
                <h4>Fill in all the fields below.</h4>
                <hr></hr>
                <p>Your Information</p>
            </div>
            <form>
                <div className='input-colum'>
                    <div className='input-field'>
                        <label>FirstName</label>
                        <input type='text' id='fn' value={data.fn} placeholder='Enter FirstName' onChange={(e)=>{senduserdata(e)}}/>
                    </div>
                
                    <div className='input-field'>
                        <label>LastNameName</label>
                        <input type='text' id='ln' value={data.ln} placeholder='Enter LastName'  onChange={(e)=>{senduserdata(e)}}/>
                    </div>
                </div>
                <div className='input-colum'>
                    <div className='input-field'>
                        <label>Phone Number</label>
                        <input type='text' id='pn' value={data.pn} placeholder='Enter Phone No'  onChange={(e)=>{senduserdata(e)}}/>
                    </div>
                    <div className='input-field'>
                        <label>Email-Address</label>
                        <input type='text' id='ei' value={data.ei} placeholder='Enter Email'  onChange={(e)=>{senduserdata(e)}}/>
                    </div>
                </div>
                <div className='input-colum'>
                    <div className='input-field'>
                        <label>Password</label>
                        <input type='text' id='pass' value={data.pass} placeholder='Enter Password'  onChange={(e)=>{senduserdata(e)}}/>
                    </div>
                    <div className='input-field'>
                        <label>Confirm-Password</label>
                        <input type='text' id='cpass' value={data.cpass} placeholder='Enter Confirm-Password'  onChange={(e)=>{senduserdata(e)}}/>
                    </div>
                </div>
                <div className='input-colum'>
                    <div className='input-field'>
                        <label>Address</label>
                        <input type='text' id='ad' value={data.ad} placeholder='Enter Address'  onChange={(e)=>{senduserdata(e)}}/>
                    </div>
                    <div className='input-field'>
                        <label>City</label>
                        <input type='text' id='ct' value={data.ct} placeholder='city'  onChange={(e)=>{senduserdata(e)}}/>
                    </div>
                </div>

                <hr/>
                <button onClick={newreg}>New Resitration</button>

                <div className='olink'>
                    <p>Already have an Account?  <a ng-href="login.html" target="_self" href="login.html">Login Now</a></p>
                </div>
            </form>
        </div>



    </div>
  )
}

export default Reg