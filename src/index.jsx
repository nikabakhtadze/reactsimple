import React from 'react';
import ReactDOM from 'react-dom/client';
import Nika from './nika';
class Car extends React.Component{
  render() {   
     return (
       <React.Fragment>
        <h1><Nika></Nika></h1>
       </React.Fragment>
    );
  }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Car></Car>);