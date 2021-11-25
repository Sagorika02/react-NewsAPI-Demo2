/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
export default function Header() {
    const logout = () => {
        localStorage.removeItem('token');
       
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a data-testid="brandname" className="navbar-brand" href="#">News Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                   

                    {
                               localStorage.getItem('token')?
                               <li className="nav-item">
                               <button className="fas fa-sign-out-alt p-2"onClick={logout}>Logout</button>
                               </li>
                     
                               :<>
                             <BrowserRouter>
                               <Link to="/login" className="nav-link">Login</Link></BrowserRouter> 
                              <BrowserRouter>
                              <Link to="/register" className="nav-link">Register</Link></BrowserRouter>
                               </> 

                    }
                       
                        <li className="nav-item"><BrowserRouter>
                        <Link to="/dashboard" className="nav-link">dashboard</Link></BrowserRouter>
                        </li>
                        <li className="nav-item"><BrowserRouter>
                        <Link to="/readnow" className="nav-link">readnow</Link></BrowserRouter>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
 
}
