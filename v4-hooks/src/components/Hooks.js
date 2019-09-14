import React, { useState } from 'react';

const HookState = () => {
    const [name, setName ] = useState({
        firstname: 'Emmanuel',
        age: 30,
        money: []
    })

  console.log(name)
  return (
     
    <div>
       <h2>Hooks at work</h2>
       <h4>My name is {name.firstname}</h4>
       <button onClick = {() => setName({firstname: 'Tweneboah'})}>Set Name</button>
    </div>
  )
}

export default HookState
