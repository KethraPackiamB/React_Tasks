import { BrowserRouter,Routes, Route } from "react-router-dom";
import Products from "./Products";
import Details from "./Details";

const RoutingPage = () => {

    return(
        <div>
           <BrowserRouter>
           <Routes>
            <Route path="/products" element={<Products/>}> </Route>
            <Route path="/details/:id" element={<Details/>}></Route>
           
            
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default RoutingPage;