import { useNavigate } from "react-router-dom";
const Products = () => {
const Products = [
        {
            id: "1",
            label : "Chocolate",
        },
        {
            id : "2",
            label : "Milk",
        },
        {
            id : "3",
            label : "Ghee",
        }
    ];

    const navigate = useNavigate();
return(
        <div>
            <h1>Products</h1>
            {Products.map((product)=> {
                return(
                    <button key={product.id} onClick={()=>navigate(`/details/${product.id}?name=${product.label}&label=${product.label}`)}>
                        {product.label}</button>
                )
            })}
            
        </div>
    )
}
export default Products;