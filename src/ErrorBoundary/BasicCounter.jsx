import { useState } from "react"

const BasicCounter = () => {

    const [count, setCount] = useState(0);

    try {
         if(count===3){
        throw new Error("Danger Zone");
    }

    } catch (error) {
        console.log(error);
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
export default BasicCounter;