import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycleDemo from './components/LifeCycleDemo'
import AjacCallDemo from './components/AjaxCallDemo';
import ProperWayMakingAjaxCall from './components/ProperWayMakingAjaxCall'
function App() {
  return (
    <div className="App">
       <h1>React Routing</h1>
       <h2>Server-side-Rendering</h2>
       <p> This uses the traditional a href to request a resources and this causes the entire Server to render</p>

       <p>Traditional routing is “Server-side routing”</p>

       <p>Clicking a  href link causes browser to request a new page & replace entire DOM</p>

       <p>Server decides what HTML to return based on URL requested, entire page refreshes</p>

       <hr/>

       <h1>Client-Side-Rendering</h1>
       <p>It does not require loading new page from the server</p>
       <div>
         <h2>Disadavantages of client-side-rendering</h2>
       </div>
       <p>
       <ul>
         <li>We don't get different url as we move around the page</li>
         <li>Since there is no history, the browser cannot determined which page we were so  we cannot use forward and back fucntions in the browser</li>

         <li>There is also no way to bookmark a page on the site</li>

         <li>But with the help of react-router-dom we can achieve all these</li>
       </ul>
       </p>
    </div>
  );
}

export default App;
