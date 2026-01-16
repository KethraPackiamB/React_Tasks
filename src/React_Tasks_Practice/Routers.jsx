import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackComponent from "../ErrorBoundary/ErrorFallbackComponent";
import { CartProvider } from "./CartContext";

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
             <CartProvider>
          <Routes>
           
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
           
          </Routes>
           </CartProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
