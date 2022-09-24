import React from 'react'
import { useState } from 'react'
import { Navigate,useNavigate } from "react-router-dom";
const Signup = (props) => {
    const navigate = useNavigate();
    const [credentials, setsetCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    const handleSubmit= async (e)=>{

        e.preventDefault();
      const  {name,email,password}=credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
           
            method: "POST",
        
            headers: {
              "Content-Type": "application/json",
         
            },
            body: JSON.stringify({name,email,password })
          });
          const json=await response.json()
          console.log(json);
         if(json.success){
            localStorage.setItem('token',json.authtoken);
          
            // return <Navigate replace to="/home" />;
            navigate("/");
            props.showAlert("success","success")
         }
        else{
          props.showAlert("some error occured","danger")

        }
        }
        
        const onChange=(e)=>{
            setsetCredentials({...credentials,[e.target.name]:e.target.value})
            
            }


  return (
    <div><form onSubmit={handleSubmit}>
         <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name"name="name" onChange={onChange}aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text"></div>
    </div>


    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name="email" onChange={onChange}aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>


    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password"onChange={onChange} className="form-control" id="password" minLength={5} required name="password" />
    </div>
   
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
      <input type="password"onChange={onChange} required className="form-control" id="cpassword" name="cpassword" minLength={5}/>
    </div>


    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Signup