
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from './Components/dashboard/Dashboard';
import Footer from './Components/footer/Footer';
import Login from './Components/login/Login';
import Register from './Components/register/Register'
import NotFound from './Components/notFound/NotFound';
import ReadNow from './Components/readNow/ReadNow';
import authentication from './Components/login/auth'
import Filter from './Components/filter/Filter'
import React, { useState } from 'react'
import Header from './Components/header/Header';


export default function App() {
  const [status, setStatus] = useState(false);
  function loginStatusFunction(stat)
  {
     setStatus(stat);
  }

  return (
    <div>
      <Router> 
        <Header loginStatus={status}/>
          <Switch>
            <Route exact path="/login" component={()=><Login loginStatus={loginStatusFunction}/>}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={() => authentication.isLoggedin ? <Dashboard /> : <Redirect to="/login" />} />
            <Route exact path="/readNow" component={() => authentication.isLoggedin ? <ReadNow /> : <Redirect to="/login" />}/ >           
            <Route exact path="/filter" component={() => authentication.isLoggedin? <Filter /> : <Redirect to="/login" />} />       
            <Route path="*" component={NotFound} />              
          </Switch>
          <Footer />
        </Router>
    </div>
  )
}

