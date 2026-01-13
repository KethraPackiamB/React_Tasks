import { useNavigate, useParams, Link } from "react-router-dom";

const PageTwo = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/page-three", {state: {name: "Packiam", age: "21"}});
    }

    const params = useParams();
    console.log(params);

    return(
        <div>
            <h1>This is Page two. Name : {params.name}</h1>
            <button type="button" onClick={handleNavigate}>Next Page</button>
            <Link to="/page-three" state={{params}}>details</Link>
            
        </div>
    )
}
export default PageTwo;