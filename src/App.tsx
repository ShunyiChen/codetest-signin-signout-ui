// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUp from './signup/SignUp';
import SignIn from './signin/SignIn';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

       <Router>
           <Link to="/signUp">注 册</Link> | 
          <Link to="/signIn">登 录</Link>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/signIn" component={SignIn}></Route>
      </Router>
      

    </div>
  );
}

export default App;
