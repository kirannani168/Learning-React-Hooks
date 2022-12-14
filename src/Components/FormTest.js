import React, { useState } from 'react'

function FormTest() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const nameHandler = (e)=>{
        setName(e.target.value)
    }
    const emailHandler = (e) =>{
            setEmail(e.target.value)
    }
    const submitHandler = (e) =>{
        alert('You entered: '+ name + email);
        e.preventDefault()
    }
  return (
    <div>
        <h3>Form Test</h3>
        <span>
            {name}<br/>
            {email}
        </span>
        <form onSubmit={(e)=>{submitHandler(e)}}>
            <label>Name: </label>
            <input type='text' value={name} onChange={(e)=>{nameHandler(e)}}/>
            <br></br>
            <label>Email</label>
            <input type='email' value={email} onChange={(e)=>{emailHandler(e)}}/>
            <button type='submit' value='Submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormTest