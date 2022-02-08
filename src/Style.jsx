import React, { Component } from 'react';

//Inline Style
// const InlineStyle = () => {
//     return (
//         <div>
//        <h1 style={{color: "green"}}>Hello Sheba!</h1>
//         {/* camelCase is important. */}
//        <h1 style={{backgroundColor: "lightblue"}}>Hello Sheba!</h1> // camelCase is important.
//         </div>
//       );
// }
// export default InlineStyle;


// ---------------------------------------------------------------------------------------------
// Object with Styling.
const InlineStyle = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <div>
            <h1 style={mystyle}>Hello Sheba!</h1>
        </div>
      );
}
export default InlineStyle;
