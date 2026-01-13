import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({item}) => {

    const {dispatch} = useContext(CartContext);

    return(
        <div>
            {/* <h1>Cart Item</h1> */}
            <h4>{item.name}-{item.id}</h4>
            <button onClick={()=>dispatch({type: "REMOVE_ITEM", payload : item})}>Remove</button>
        </div>
    )
}
export default CartItem;