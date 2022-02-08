
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import LearningClasses from './LearningClasses';
// import LearningFunction from './LearningFunction';
// import Form from './Form';
//import InlineStyle from './Style';
// import PropsLearning from './propsLearning';
// import LifeCycleLearning from './LifeCyleLearning';
//import PropsValidation from './PropsValidation';
import RouteLearning from './RouteLearning';




class App extends Component {
  
  render() { 
    return <div>
      {/* <LearningClasses user = {this.state}/> */}
      {/* <LearningFunction name={'Kushwah'} address={{city:'Indore', state:'M.P'}}/>
      <LearningFunction name={'Shebs'} address={{city:'Mandsour', state:'M.P'}}/> */}
      {/* < LearningFunction/> */}
     {/* <Form/> */}
     {/* <InlineStyle/> */}
     {/* <PropsLearning /> */}
     {/* <LifeCycleLearning/> */}
      {/* <PropsValidation/> */}
      <div className ="content">
       <RouteLearning/>
      </div>
    </div>;
  }
}
 
export default App;