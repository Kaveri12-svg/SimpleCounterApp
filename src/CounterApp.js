import { useState } from "react"
import './App.css';

//to store initial and upadted values
const CounterApp = () => {
    const [counter, setCounter] = useState(0)

// Handle increment
const HandleIncrement = () => {
    setCounter(counter + 1)
 }

 // Handle decrement
const HandleDecrement = () => {
    setCounter(counter - 1)
}

//handle reset
const HandleReset = () => {
    setCounter(0)
}
return (
    <div>
        <h2>{counter} Times You have Clicked me!</h2>
        <div >
        <button onClick={HandleIncrement} className="button1">Increment</button>
        <button onClick={HandleDecrement} className="button2">decrement</button>
        <button onClick={HandleReset} className="button3">reset</button>
        </div>
    </div>
)
}

export default CounterApp;