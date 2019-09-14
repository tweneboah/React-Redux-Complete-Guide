import React from 'react';
import HooksComponent from './components/Hooks';
import Toggler from './components/Toggler';
import FormsWithHooks from './components/FormsWithHooks';
import UseEffectHooks from './components/UseEffectHooks'
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>React Hooks</h1>
       <p>We can use all class base features in a functional component</p>
       <p>userState is use to manage a state</p>
       <p>useState gives us an array with two variables. One variable represent the piece of state and the other is a a function that helps us to update the state</p>

       <p>It returns an array with two items so we can use array destructure to grap the</p>

       <HooksComponent/>
<h1>Toggler with Cutom Hooks</h1>
<p>Click to toggle</p>
       <Toggler/>

       <h1>Forms With hooks</h1>
      <FormsWithHooks/>

      <hr/>
      <h1>UseEffect</h1>
      <UseEffectHooks/>
      <p>For this hook system we don't have access to any liecycle method</p>

      <p>useEffect comprises all the lifecycle methods</p>
      <p>This will run at every re-renders</p>

      <p>We can prevent this by customising it</p>

      <p>We pass a function to useEffect</p>
    </div>
  );
}

export default App;
