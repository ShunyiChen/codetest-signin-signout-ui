// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
// import SignUp from '../signup/SignUp';
import SignIn from '../signin/SignIn';
import Dashboard from '../dashboard/Dashboard';
import Preferences from '../preferences/Preferences';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

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
