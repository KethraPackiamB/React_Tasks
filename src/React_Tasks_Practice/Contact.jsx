import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { cart, dispatch } = useContext(CartContext);

  const [newProduct, setNewProduct] = useState({});
  console.log(cart);

  return (
    <div>
      <h1>Displaying Cart Items</h1>

      <input
        type="text"
        name="newProduct"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: { id: cart.length + 1, name: newProduct },
          })
        }
      >
        Add Item
      </button>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.id}-{item.product} - {item.category}
          </p>
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
          >
            Remove Item
          </button>
        </div>
      ))}
    </div>
  );
};

export default Contact;
