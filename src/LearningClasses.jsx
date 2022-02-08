import React, { Component } from "react";

// class LearningClasses extends Component {
//     render() { 
//         return <div>
//             <h1>Hello Sheba!</h1>
//         </div>;
//     }
// }
// export default LearningClasses;


// ---------------------------------------------------------------------------------------------
//Class with props
// class LearningClases extends Component {
//     constructor(props) {
//                 super(props);
//             }
//             render() {
//                 return (
//                     <div>
//                          <h1>{this.props.user}</h1> 
//                     </div>
//                  );
//             }
//         }
 
// export default LearningClases;


// ---------------------------------------------------------------------------------------------
// Reander Function
// class LearningClasses extends Component {
//     state = {
//             details: [
//               { name: "Sheba", city: "Mandsour" },
//               { name: "Kushwah", city: "Indore" },
//               { name: "Rajju", city: "Kerala" },
//             ],
//           };
//           render() {
//             //  const length = this.state.details.length;
//             return (
//               <div>
//                 <h3>
//                   {this.state.details.map((detail) => (
//                       <div>
//                           <h2 key={""}>{detail.name}</h2>
//                           <h5 key={""}>{detail.city}</h5>
//                       </div>
//                   ))}
//                 </h3>
//               </div>
//             );
//           }
//         } 
// export default LearningClasses;


// ---------------------------------------------------------------------------------------------
// React Event with bind
class LearningClasses extends Component {
    state = {
        name : 'Sheba'   
    }
    handleClick(){
           this.setState({
               name : 'Jose'
           })
           console.log(this);
    };
     handleClick2 = ()=> {
        this.setState({
            name : 'Feba'
        })
        console.log(this);
 };
    render() { 
        return <div>
            <button className="btn btn-primary"onClick={this.handleClick = this.handleClick.bind(this)}>Click Me !</button>
            <br/><button  className="btn btn-success m-2" onClick={this.handleClick2}>Click Me2 !</button>
            
        </div>;
    }
}
export default LearningClasses;



