import React, { useState } from 'react';


const Toggler = () => {
    const [isHappy, setIshappy ] = useState(true)

    const toogler = () => {
        setIshappy(!isHappy)
    }
  return (
    <div>
      <h1 onClick = {toogler}>{isHappy? '😂' : '😒'}</h1>
    </div>
  )
}

export default Toggler
