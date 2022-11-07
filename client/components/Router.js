import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";
import ProductDetail from "./ProductDetail";

import Products from "./Products";
import ShippingAddress from "./ShippingAddress";
import Signup from "./Signup";
// import MessageView from "./MessageView";

const Router = ({ products, productDetail }) => {
  return (
    <Routes>
      <Route path="/" element={<Products products={products} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shipping-address" element={<ShippingAddress />} />
      <Route
        path="/product/:id"
        element={<ProductDetail productDetail={productDetail} />}
      />
    </Routes>
  );
};

export default Router;
