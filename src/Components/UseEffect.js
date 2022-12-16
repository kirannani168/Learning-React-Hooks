import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const countHandler = () => {
        setCount(count + 1)
    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    useEffect(() => {
        console.log("Rendered")
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <h3>useEffect</h3>
            <b>
                <pre>
                    <p>When the count get updated, document title also get updated</p>
                    {count} <br />
                    {name}
                </pre>
            </b>
            <input type='text' value={name} onChange={(e) => nameHandler(e)} />
            <button onClick={countHandler}>Click Here</button>
        </div>
    )
}

export default UseEffect