import React from 'react'
import { useState } from 'react'
import {useNavigate } from "react-router-dom";

// if (!authenticated) {
//     return <Navigate replace to="/login" />;
//   } else {
//     return (
//       <div>
//         <p>Welcome to your Dashboard</p>
//       </div>
//     );
//   }
const Login = (props) => {
  
const [credentials, setsetCredentials] = useState({email:"",password:""})
// let history=unstable_HistoryRouter
const navigate = useNavigate();
//ye karo new react ki wajah se
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
        
            headers: {
              "Content-Type": "application/json",
         
            },
            body: JSON.stringify({email:credentials.email, password:credentials.password })
          });
          const json=await response.json()
          console.log(json);
          if(json.success){
            //redirect
            localStorage.setItem('token',json.authtoken);
          
                // return <Navigate replace to="/home" />;
             
                navigate("/home");
                props.showAlert("Log in success","success")
            //   } else {
            //     return (
            //       <div>
            //         <p>Welcome to your Dashboard</p>
            //       </div>
                // );
              
          }
          else{
           props.showAlert("invalid credentials","danger")
          }
        }
        const onChange=(e)=>{
            setsetCredentials({...credentials,[e.target.name]:e.target.value})
            
            }


  return (
    <div>
      <div className='mt-3'><h2>Login to Continue</h2></div>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"value={credentials.password}  onChange={onChange} name="password"/>
  </div>

  <button type="submit" className="btn btn-primary"  >Submit</button>
</form>


    </div>
  )
}

export default Login