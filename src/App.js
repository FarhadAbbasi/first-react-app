import React from 'react' ;
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return   <div>    
    Hello From App.js <strong> {name} </strong>  Age = {age - 5 } 
    <br/>

    <Hello name = {name}  classname = "header" > </Hello>
      </div> 

}


// const App = function ({name}) {
//  return <div>Hello {name} </div>  }

// const App = ({name}) => {
//   return <div>Hello {name} </div>  }

// const App = ({name}) =>  <div>Hello {name} </div> 

// const App =  ({name})=> "Hello world"  + name          // function App()  { return "Hello world"  }
 
 

export default App;
