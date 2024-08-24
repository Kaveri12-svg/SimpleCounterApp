import { useState } from 'react'
import './CounterApp.css'

const CounterApp = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrement = () => {
        if(count <= 0) {
            setCount(0)
        } else {
        setCount(prev => prev - 1)
        }
    }

    const handleReset = () => {
        setCount(0)
    }
    return (
        <div className='Parent'>
            <h2>Counter App</h2>
            <h5>You have clicked me {count} times</h5>
            <div>
              <button onClick={handleIncrement}>Increment</button>
              <button onClick={handleDecrement}>Decerement</button>
              <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default CounterApp;