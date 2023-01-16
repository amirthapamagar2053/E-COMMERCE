import React from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./components/Router";

import { initializeProducts } from "./reducers/productReducer";
import { setUserObject } from "./reducers/userReducer";
import { initializeCartItems } from "./reducers/cartItemsReducer";
import { useMatch } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(window.localStorage.getItem("loggedinUser"));
  console.log("the lcoal user", user);
  const cartItems = useSelector((state) => state.cartItems);
  let products = useSelector((state) => state.products);
  products = products ? products : [];

  useEffect(() => {
    // load products in store form backend
    console.log("the useeffect entered");
    dispatch(initializeProducts());
    if (user) {
      dispatch(initializeCartItems());

      // set logged in user
      dispatch(setUserObject(user));
    }
  }, []);

  const matchProduct = useMatch("/product/:id");
  console.log("the products is", products);
  // console.log(matchProduct);
  const productDetail = matchProduct
    ? products.find((prod) => {
        return prod.id === Number(matchProduct.params.id);
      })
    : null;

  console.log("the app ", productDetail);
  console.log("the match ", matchProduct);

  return (
    <>
      <NavBar cartItems={cartItems} />

      <Router products={products} productDetail={productDetail} />
    </>
  );
};

export default App;
