import Layout from "./Context-api-state-patterns/Layout";
import { useContext } from "react";
import { ThemeContext } from "./Context-api-state-patterns/ThemeContext";
import ThemeToggler from "./Context-api-state-patterns/ThemeToggler";

const ThemeContextExample = () => {

    const {theme} = useContext(ThemeContext);

    const styling = {
        backgroundColor : theme === "light" ? "#fff" : "#000",
        color : theme === "light" ? "#000" : "#fff",

    }

    return(
        <div style={styling}>
            <h1>Theme Context Example</h1>
           
               <ThemeToggler/>
          
           
        </div>
    )
}

export default ThemeContextExample;