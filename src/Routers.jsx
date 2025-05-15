import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart/Cart";
import { ProductContextProvider } from "./productContext";

function Routers() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default Routers;
