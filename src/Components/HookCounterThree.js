import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName:''})
  return (
    <div>
        <h3>useState() with Object</h3>

        <input type='text' placeholder='firstName' value={name.firstName} onChange={e=>setName({...name, firstName: e.target.value})}/> 
        <input type='text' placeholder='lastName' value={name.lastName} onChange={e=>setName({...name, lastName: e.target.value})}/>

        <h3>Your firstName is: {name.firstName}</h3>
        <h3>Your lastName is: {name.lastName}</h3>
    </div>
  )
}

export default HookCounterThree