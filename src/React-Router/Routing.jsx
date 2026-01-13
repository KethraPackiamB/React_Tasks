import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

const Routing = () => {

    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageOne/>}></Route>
                <Route path="/page-two/:name" element={<PageTwo/>}></Route>
                <Route path="/page-three" element={<PageThree/>}></Route>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}
export default Routing;