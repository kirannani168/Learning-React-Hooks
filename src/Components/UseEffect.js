import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const countHandler = () =>{
        setCount(count+1)
    }
    useEffect(()=>{
        document.title =   `You clicked ${count} times`
    })
    return (
        <div>
            <h3>useEffect</h3>
            <b>
                <pre>
                <p>When the count get updated, document title also get updated</p>
                    {count}
                </pre>
            </b>
            <button onClick={countHandler}>Click Here</button>
        </div>
    )
}

export default UseEffect