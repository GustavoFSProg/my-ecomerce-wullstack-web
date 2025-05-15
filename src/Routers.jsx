import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart/Cart";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
