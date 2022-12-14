import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div>
            <h3>Using useState() Hook</h3>
            <button onClick={()=>setCount(count+1)}>Count: {count}</button>
            <button onClick={()=>setCount2(count2+5)}>Count: {count2}</button>
        </div>
    )
}

export default HookCounter