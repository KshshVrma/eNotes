import React from 'react'
import {useNavigate } from "react-router-dom";
import {
   
    Link,useLocation
  } from "react-router-dom";


  
export default function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();
 const handleLogout=()=>{
  localStorage.removeItem('token');
  navigate('/login');

 }
  return (
    <div>  <nav className="navbar navbar-expand-lg avbar-warning bg-warning">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">iNotebook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`}  to="/about">About</Link>
          </li>
          
        
        </ul>
<div>
        {localStorage.getItem('token')?
        <form className="d-flex" role="search">
        <Link className="btn btn-danger mx-2" to="/login" role="button" btn-lg>login</Link>
        
        <button onClick={handleLogout}className="btn btn-primary">logout</button>
        {/* <Link className="btn btn-success mx-2" to="/signup" role="button" btn-lg>Signup</Link> */}
        </form>:<Link className="btn btn-success mx-2" to="/signup" role="button" btn-lg>Signup</Link>}
        {/* <Link className="btn btn-success mx-2" to="/signup" role="button" btn-lg>Signup</Link> */}
        </div>
        {/* <button onClick={handleLogout}className="btn btn-primary">logout</button> */}
      </div>
    </div>
  </nav></div>
  )
}
