import React, { useState } from 'react'

function NeverZero(props) {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("")

    const increment = (ayo) => {
        setCount((prev) => prev+1)
        setMessage(ayo)
    }

    const decrement = () => {
        if(count === 0) {
            setCount(0)
        }
        else {
            setCount(count-1)
        }
    }

    const legal = () => {
        if(props.age > 18)
        {
            return <p>Legal Age</p>
        }
        else{
            return <p>Not of Legal Age</p>
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increment("lol")}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>You name is {props.name} and your age is {props.age}</p>
            {legal()}
            {message && <p>{message}</p>}
        </div>
    )
}

export default NeverZero