// import React from 'react';
// import logo from './logo.svg';
// import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import SignIn from '../signin/SignIn';
import Dashboard from '../dashboard/Dashboard';
import Preferences from '../preferences/Preferences';
import useToken from './useToken';
import SignUp from '../signup/SignUp';

function App() {

  const { token, setToken } = useToken();

  if(window.location.pathname === "/signUp") {
     return <SignUp/>
  }
  if(!token) {
    return <SignIn setToken={setToken} />
  }

  return (
        <div className="wrapper">
        <h1>Application</h1>
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </div>



    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //    <Router>
    //       <Link to="/signUp">注 册</Link> | 
    //       <Link to="/signIn">登 录</Link>
    //       <Route path="/signUp" component={SignUp}></Route>
    //       <Route path="/signIn" component={SignIn}></Route>
    //   </Router>
      

    // </div>
  );
}

export default App;
