
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Dashboard from './Components/dashboard/Dashboard';
import Login from './Components/login/Login';
import ReadNow from './Components/readNow/ReadNow';
import Register from './Components/register/Register';


function App() {
  return (
   <div>
     
    <Router>

    <Header/>
    
 

      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route exact path="/dashboard" component={()=>localStorage.getItem('token')?<Dashboard/>:<Redirect to="/login"/>} />
      <Route path="/readnow" component={()=>localStorage.getItem('token')? <ReadNow/>:<Redirect to="/login"/>}/>
      {/*  <Dashboad/> */}

    
     </Router>
     <Footer/>
   </div>





  );
}
export default App;
