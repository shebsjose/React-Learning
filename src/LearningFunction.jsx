import React, { Component } from 'react'

// function LearningClasses(){
//     return <h1>Hello shebs !</h1>

// }
// export default LearningClasses;


// ---------------------------------------------------------------------------------------------
// Function with Arrow Function
// const LearningFunction = () => {
//     return (
//         <div>
//             <h1>Hello Shebs!</h1> 
//         </div>
//       );
// }
// export default LearningFunction;


// ---------------------------------------------------------------------------------------------
// Function with props.
// const LearningFunction = (props) => {
//     console.log(props);
//         return (
//             <div style={{textAlign:'center', margin:20}}>
//                 <h1>Hello {props.name}</h1>
//                 <h2>{props.address.city}</h2> 
//             </div>
//           );
//     }
//     export default LearningFunction;


// ---------------------------------------------------------------------------------------------
// Function with Event.
const LearningFunction = () => {
    function handleClick(e) {
        e.preventDefault();
        console.log('You clicked Me.');
      }
      return (
       <div>
           <button type="button" onClick={handleClick}>Submit</button>
       </div>
      );
}
    export default LearningFunction;