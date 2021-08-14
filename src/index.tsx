import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
// import Bulb from './components/examples/bulb/Bulb';
// import Example from './components/examples/IntroducingHooks/Example';
// import HookCounter from './components/examples/HookCounter';
// import HookCounterTwo from './components/examples/HookCounterTwo';
// import HookCounterThree from './components/examples/HookCounterThree';
// import HookCounterFour from './components/examples/HookCounterFour';
// import ClassCounterOne from './components/examples/ClassCounterOne';
// import HookMouse from './components/examples/HookMouse';
import MouseContainer from './components/examples/MouseContainer';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Bulb /> */}
    {/* <Example /> */}
    {/* <HookCounterTwo /> */}
    {/* <HookMouse/> */}
    <MouseContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
