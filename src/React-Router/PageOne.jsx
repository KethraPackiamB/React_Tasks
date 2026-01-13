import { useNavigate } from "react-router-dom";
import {useState} from "react";

const PageOne = () => {

    const [name, setName] = useState(null);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/page-two/"+name);
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return(
        <div>
            <h1>This is Page One</h1>

            <input type="text" placeholder="Enter Your Name" value={name} onChange={handleChange}/>
            <button type="button" onClick={handleNavigate}>Next Page</button>
        </div>
    )
}
export default PageOne;