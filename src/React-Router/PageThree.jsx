import { useLocation, useNavigate } from "react-router-dom";

const PageThree = () => {

    const location = useLocation();
    console.log(location);

    const Navigate = useNavigate();

    const handleNavigate = () => {
        Navigate("/");
    }
    

    return(
        <div>
            <h1>This is Page Three</h1>
            <button type="button" onClick={handleNavigate}>Next Page</button>
            {/* <h1>{location.state.params.name}</h1> */}
            <p>{location.pathname}</p>
            <h2>{location.state.name} - {location.state.age}</h2>
        </div>
    )
}
export default PageThree;