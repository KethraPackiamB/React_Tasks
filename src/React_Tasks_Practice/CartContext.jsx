import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReduser = (state, action) => {
    switch (action.type) {
        case "Add_ITEM":
            return [...state, action.payload]
            break;

        case "REMOVE_ITEM":
            return state.filter((item)=> item.id !== action.payload.id);
            break;

        // case "SHOW_ITEM":
        //     return state.find((item)=>item.id === action.payload.id);
        //     break;

        default:
            return console.log("Invalid Action");
            break;
    }
}

export const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReduser, [
        {id : "1", product : "Smart Phone", category : "Electronics"},
        {id : "2", product : "Table", category : "Furniture"},
        {id : "3", product : "Blanket", category : "Cloths"},
    ])

    return(
        <div>
            <CartContext.Provider value={{cart, dispatch}}>
                {children}
            </CartContext.Provider>
        </div>
    )
}

    

