import { CartContext } from "./CartContext";
import { useContext } from "react";
import About from "./About";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";


const Home = () => {

    const {cart} = useContext(CartContext);

    console.log(cart);

  
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/contact`);
    }

    return(
        <div>
            <h1>Home Component</h1>
            <button onClick={handleNavigate}>next</button>
          
        </div>
    )
}

export default Home;