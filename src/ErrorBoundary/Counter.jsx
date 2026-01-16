import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0);

   if(count===3){
        throw new Error("Danger Zone");
    }

    const handleCount = () => {
        setCount((prev)=>prev+1);
    }

    return(
        <div>
            <h1>Basic Counter</h1>
            <h3>{count}</h3>
            <button onClick={handleCount}>Increment</button>
        </div>
    )
}
export default Counter;