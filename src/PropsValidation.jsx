import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsValidation extends React.Component {
    render() { 
        console.log(this.props);
        return <div>
            <div>{this.props.users.length ==0 ? this.props.users.map((u)=><h1>{u}</h1>): 'no data'}</div>
              <table>
                  <tr>
                      <th>Type</th>
                      <th>Default Value</th>
                      <th>Valid</th>
                  </tr>
                  <tr>
                      <td>Array</td>
                      <td>{this.props.propArray}</td>
                      <td>{this.props.propArray ? "True" : "False"}</td>
                      <td>{this.props.propArray ? "True" : "False"}</td>
                  </tr>
                  <tr>
                      <td>Boolean</td>
                      <td>{this.props.propBool ? "True" : "False"}</td>
                      <td> {this.props.propBool ? "True" : "False"}</td>
                  </tr>
                  <tr>
                      <td>String</td>
                      <td>{this.props.propString}</td>
                      <td>{this.props.propString ? "True" : "False"}</td>
                  </tr>
                  <tr>
                      <td>Number</td>
                      <td>{this.props.propNumber}</td>
                      <td>{this.props.propNumber ? "True" : "False"}</td>
                  </tr>
              </table>
        </div>;
    }
}
PropsValidation.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    users: PropTypes.array.isRequired,
 }
 
 PropsValidation.defaultProps = {
    //  users: ['sheba', 'jose'],
    propArray: [1,2,3,4,5],
    propBool: true,
    propNumber: 1,
    propString: "Hello, World!"
 }
 
export default PropsValidation;