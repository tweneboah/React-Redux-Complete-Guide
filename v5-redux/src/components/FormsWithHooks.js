import React, {useState} from 'react'

const FormsWithHooks = () => {
    const [email, setEmail] = useState('Atom')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
      alert(email)
      setEmail('')
    }

  return (
    <div>
      <h3>The Value is {email}</h3>
      <form onSubmit = {handleSubmit}>
        <input type= 'text' value = {email} onChange = {handleChange}/>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default FormsWithHooks
