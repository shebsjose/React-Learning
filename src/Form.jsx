import React, { Component } from 'react'

//Uncontrolled Component
class Form extends React.Component {
    state ={
        value :'',
    }
    handleChange(e){
        console.log(this);
        this.setState({value: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('Form is Submitted ' + this.state.value);
    }
    render() { 
        return <div>
            <form onSubmit={this.handleSubmit =this.handleSubmit.bind(this)}>
                <input type="text"
                        value={this.state.value}
                        onChange={this.handleChange =this.handleChange.bind(this)} /> 
                        <button className="btn btn-primary"> Click Me!</button>
            </form>
        </div>;
    }
} 
export default Form;


// const Form = () => {
//     return (
//         <div>
            
//         </div>
//       );
// }
 
// export default Form;