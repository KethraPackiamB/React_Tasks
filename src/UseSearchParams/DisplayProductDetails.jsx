import { useParams, useSearchParams, useLocation } from "react-router-dom";

const DisplayProductDetails = () => {
  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  // const name = searchParams.get("name");
  // const category = searchParams.get("category");

  const location = useLocation();

  console.log(location);

  return (
    <div>
      <h1>Display Product Details</h1>
      <p>ID - {params.id}</p>
      <p>Name of the product : {searchParams.get("name")}</p>
      <p>Category of the Product : {searchParams.get("category")}</p>
      <button
        onClick={() => {
          setSearchParams({
            name: "Chocolate Ice Cream",
            category: "Ice Cream",
          });
        }}
      >
        Update
      </button>
    </div>
  );
};
export default DisplayProductDetails;
