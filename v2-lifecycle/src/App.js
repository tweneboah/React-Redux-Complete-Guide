import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycleDemo from './components/LifeCycleDemo'
import AjacCallDemo from './components/AjaxCallDemo';
import ProperWayMakingAjaxCall from './components/ProperWayMakingAjaxCall'
function App() {
  return (
    <div className="App">
       <h1>Life Cycle</h1>
        <div>
          <p>This is the flow. When the app is launched the constructor runs first follow by the render method and componentDidMount(). </p>

          <p>componentDidMount() only runs once but for the render() it runs at any time the state changes</p>

         <hr/>
         <h3>Proper way of making Ajax Call </h3>
         <p>Add addition property to the state like say isLoading : 'false'</p>
         <p>In the componentDidMount update the isLoading:'true' and then make a conditional state. Chectk the ProperWayMakingAjaxCall component for the code</p>

         
          <p>
            We make ajax call in componentDidMount()
          </p>

          <hr/>
         
         <ProperWayMakingAjaxCall/>
        </div>
    </div>
  );
}

export default App;
