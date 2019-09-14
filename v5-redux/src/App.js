import React, {useState} from 'react';
import { connect } from 'react-redux';

import './App.css';

function App() {
  const [user, setUser ] = useState('')

  
  return (

      <div className="App">
       <h1>REDUX</h1>
       <h2>Actions</h2>
       <p>This is a functions that returns an object</p>

       <p>mapStateToProps first goes to the rootReducer and the actual reducer to grab their properties</p>
    </div>
 
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(App);
