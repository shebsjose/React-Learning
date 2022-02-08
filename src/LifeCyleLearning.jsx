import React, { Component } from 'react';

class LifeCycleLearning extends React.Component {
    state = 
    {
        Hello : 'World'
    }
    // componentdidmount,
    //  componentdidupdate, componentwillunmount, getDerivedStateFromProps, shouldcomponentupdate
    
    componentDidMount()
    {
        console.log("component Did Mount()");
    }
    componentWillMount()
    {
        console.log("component Will Mount()");
    }
    componentDidUpdate()
    {
        console.log("component Did Update()");
    }
   componentWillUnmount()
   {
    console.log("component Will Unmount()");
   }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("should Component Update()");
        return true;
    }

    
    handleClick =() =>{
         this.setState({hello:'Sheba'})
    }
    render() { 
        return <div>
            <div>
            <h1>{ this.state.hello }</h1>
            <h2>
            <a onClick={this.handleClick}>Press Here!</a>
            </h2>
            </div>
        </div>;
    }
}
 
export default LifeCycleLearning;