import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default function Header(props) {
  
  // getting username to display on header after login
  var user = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsibmV3czphbGwiLCJuZXdzOnJlYWQiLCJuZXdzOmVkaXQiXSwiaWF0IjoxNjIwOTg3NTE5LCJzdWIiOiJhZG1pbiJ9.fc8UjZOJsZFm7pwW0uohL_KEfm29gxE7eq_1T4namtk";
  var decodes = jwt_decode(user);
  
  // Logout function
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push('/login');
  }
  return (
    <nav data-testid="brandname" className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">

      <div data-testid="col" className="collapse navbar-collapse" id="navbarSupportedContent">

       {
          props.loginStatus ?
          <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link to="/" className="nav-link ml-3 active"> DashBoard </Link>
          </li>

          <li className="nav-item">
            <Link to="/readNow" className="nav-link ml-3" id="btnreadNow"> ReadNow </Link>
          </li>

          <li className="nav-item">

            <Link to="/filter" className="nav-link ml-3" id="btnfilter"> Filter </Link>          
          </li>
        </ul>
        : <> Live Feed </>
}

        {
          props.loginStatus ?
            <li className="nav-item dropdown list-group">
              <a className="text-white nav-link dropdown-toggle mr-3" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{decodes.sub}</a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <a className="dropdown-item nav-link" id="btnlogout" onClick={logOut}>Logout</a>
              </div>
            </li>
            :
            <ul className="navbar-nav ml-auto active pr-5">
              <li className="nav-item active">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item ">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </ul>
        }

      </div>
    </nav>
  )
}
