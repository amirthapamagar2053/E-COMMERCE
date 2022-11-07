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
  const user = window.localStorage.getItem("loggedinUser");
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // load products in store form backend

    dispatch(initializeProducts());
    if (user) dispatch(initializeCartItems());

    // set logged in user
    dispatch(setUserObject(JSON.parse(user)));
  }, [dispatch, user]);

  const matchProduct = useMatch("/product/:id");
  // console.log(matchProduct);
  const productDetail = matchProduct
    ? products.find((prod) => {
        return prod.id === Number(matchProduct.params.id);
      })
    : null;

  return (
    <>
      <NavBar cartItems={cartItems} />

      <Router products={products} productDetail={productDetail} />
    </>
  );
};

export default App;
