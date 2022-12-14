import React, { useState } from 'react'

function HookCounterTwo() {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // {/* below button wont work */}
            // setCount(count+1)


            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            <h3>useState() with previous state</h3>
            <span>{count}</span><br />

            {/* It is bad practice to write as below */}
            {/* <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increate</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button> */}

            {/* Good Approach */}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increate</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>

            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}

export default HookCounterTwo