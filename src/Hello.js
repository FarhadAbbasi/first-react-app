import React from 'react' ;
// import './Hello.css'
import './index.css'


function Hello ({name, classname}) {
  return <div className = {classname} >
        <p>    
        This is a para dedicated to <strong>  {name} </strong> in Hello tag      
        <br/><br/><br/><br/> 
        Now I will add a heading here as :
        </p>
        <h1 > {name}'s 1st React App. </h1>

    </div>
}

export default Hello ;