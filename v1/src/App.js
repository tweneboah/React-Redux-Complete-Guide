import React from 'react';
import logo from './logo.svg';
import './App.css';
import SingleFormsInput from './components/SingleFormsInput';
import MultipleFormInput from './components/MultipleFormsInput';

function App() {
  return (
    <div className="App">
      <SingleFormsInput/>
      <MultipleFormInput/>

    </div>
  );
}

export default App;
