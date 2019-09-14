import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectHooks = () => {
    const [number, setNumber ] = useState(9)
    const [quotes, setQuotes ] = useState('')
    useEffect(() => {
        axios.get('https://api.github.com/zen')
        .then(response => setQuotes(response.data))
    },[])

    console.log(quotes)
    //Handle
    const handleChange = (e) => {
        setNumber(e.target.value)
    }
  return (
    <div>
        <h1>Pick a movie</h1>
        <h2>Your Quote is {quotes}</h2>
        <h3>You choose: {number}</h3>
      <select value = {number}  onChange = {handleChange}>
          <option value = '1'>1</option>
          <option value = '2'>2</option>
          <option value = '3'>3</option>
          <option value = '4'>4</option>
          <option value = '5'>5</option>
      </select>
    </div>
  )
}

export default UseEffectHooks
