import { useParams, useSearchParams } from "react-router-dom";

const Details = () => {

    const params = useParams();
    console.log(params);

    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams);
    const name = searchParams.get("label");
    return(
        <div>
            <h1>Products</h1>
            <p>Details - {params?.id} and {name}</p>
            <button onClick={()=>{setSearchParams({name:"kethra"})}}>update</button>
        </div>
    )
}
export default Details;