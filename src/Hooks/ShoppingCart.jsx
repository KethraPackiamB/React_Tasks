import { useReducer } from "react";

// Initial State
const initialState = {
  cart: [],
};


// Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state);

  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ width: "450px", margin: "40px auto" }}>
      <h2>🛒 Shopping Cart</h2>

      {/* Products */}
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "8px" }}>
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            Add
          </button>
        </div>
      ))}

      <hr />

      {/* Cart */}
      <h3>Cart Items</h3>
      {state.cart.length === 0 && <p>Cart is empty</p>}

      {state.cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "8px" }}>
          <b>{item.name}</b> (₹{item.price})
          <br />
          Quantity: {item.quantity}
          <br />
          <button
            onClick={() =>
              dispatch({ type: "INCREASE_QTY", payload: item.id })
            }
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch({ type: "DECREASE_QTY", payload: item.id })
            }
            style={{ marginLeft: "5px" }}
          >
            −
          </button>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: item.id })
            }
            style={{ marginLeft: "5px" }}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h3>Total: ₹{totalPrice}</h3>

      {state.cart.length > 0 && (
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Buy Now
        </button>
      )}
    </div>
  );
};

export default ShoppingCart;
