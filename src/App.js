//import React, { Component } from 'react'
import MyAdresse from "./Component/profile/MyAdresse";
import Name from "./Component/profile/Name";
import './App.css';
function App() {
  return (
    <div className ="container">
      <img src="riadh.jpg" className="imagepublic" alt="myImage" />
      <Name/>

      <MyAdresse/>
    </div>
  );
}

export default App;
