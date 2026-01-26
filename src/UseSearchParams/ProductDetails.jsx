import { useNavigate } from "react-router-dom";

const ProductDetails = () => {

     const products = [{
        id : "1",
        label : "Television",
        category : "Electronics",
    },
    {
        id : "2",
        label : "Table",
        category : "Furniture",
    },
    {
        id : "3",
        label : "Blanket",
        category : "Cloths",
    }
]

const navigate = useNavigate();


    return(
         <div>
            <h1>Display Product Details</h1>
            {products.map((product)=>{
                return(
                <button key={product.id} 
                onClick={()=>{ 
                    navigate(`/display-product-details/${product.id}?name=${product.label}&category=${product.category}`);
                }}>{product.label}</button>
                )
            })}
        </div>
    )
}
export default ProductDetails;