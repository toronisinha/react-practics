import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Hook() {

    const [Count, setCount] = useState(0);
    const increment = () => {
        setCount(Count + 1)
    }
    const decerment = () => {
        setCount(Count - 1)
    }
    return (
        <div>
            <h2>Count: {Count}</h2>
            <p>Use Function useState</p>
            <Button className="success" onClick={increment}>+</Button>
            <Button className="info" onClick={decerment} disabled={Count === 0 ? true : false}>-</Button>
        </div>
    )
}
