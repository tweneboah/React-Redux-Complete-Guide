import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(3);

  //useState is a function that returns an array of 2 items. 

  //1. The first value represent the state. This is a read only varriable
  //2. The second varriable is function which is use to update the state

  //

  const handleClick = () => {

    setCount(count + 1)

    // setCount((prev) => {
    //   let count = prev + 1
    //   console.log(prev++);
    //   return count
    // })
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}


export default App;
