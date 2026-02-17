import { useState, useRef } from 'react';

const CounterWithRef = () => {

    const [counter, setCounter] = useState(0);
    const counterRef = useRef(0);
    console.log(counterRef)

    const handleIncrement = () => {
        setCounter(prev => prev+1);
    }

    const handleRef = () => {
        counterRef.current++
    }

  return (
    <div>
      <h1>Counter Task</h1>
      <h3>Counter is {counter}</h3>
      <h3>Ref is {counterRef.current}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleRef}>Increment Ref</button>
    </div>
  )
}

export default CounterWithRef
