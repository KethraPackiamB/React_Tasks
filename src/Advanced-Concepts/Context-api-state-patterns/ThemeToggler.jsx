import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const ThemeToggler = () => {

    const {theme,toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"} mode</button>
        </div>
    )
}
export default ThemeToggler;