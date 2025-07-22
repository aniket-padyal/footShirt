import React from "react";
import Category from "./Category";
import ProductList from "./ProductList";
import HeroBanner from "../components/home/HeroBanner";

const Discover = () => {
  return (
    <div>
      <HeroBanner />
      <Category />
      <ProductList />
    </div>
  );
};

export default Discover;
