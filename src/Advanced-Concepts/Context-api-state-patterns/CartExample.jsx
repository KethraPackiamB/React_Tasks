import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { useContext, useState } from "react";

const CartExample = () => {

    const[input, setInput] = useState("");
    const {cart,dispatch} = useContext(CartContext);

    return(
        <div>
            <h1>Cart Example</h1>
            <input type="text" placeholder="Enter Items" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={()=>{dispatch(
                {
                    type : "ADD_ITEM", 
                    payload : {id : cart.length+1, name: input}
                }
                )}}>Add</button>
            {cart.map((item)=><CartItem item={item}/>)}
        </div>
    )
}
export default CartExample;