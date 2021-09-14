import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div> <App name= "Farhad-Ali" age = { 25 } /> </div>, // App is a custom tag/element, and we can give it properties like (name, id, class etc) But we have to pass props to "custom tag/func()" like App.js.    (  Start with "<>" when swich to JSX, but use "{}" when switch to Jscript )
  document.getElementById('root')
);

// ReactDOM.render(
  
//   <div> Hello World </div>, // React take this html element and convert it into it's own xml javascript element. like example below:
//   // React.createElement('div', null, "Hello World"), // Example

//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
