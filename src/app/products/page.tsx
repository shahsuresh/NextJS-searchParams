import React from "react";
import ProductList from "./ProductList";

const Products = async (params: any) => {
  const searchingParams = await params.searchParams;

  console.log(searchingParams);
  return (
    //IN BROWSER LINK
    // http://localhost:3000/products?category=shoes&brand=puma&page=5
    <div>
      <h1> Products SearchParams</h1>
      <h2>Category:{searchingParams.category}</h2>
      <h2>Brand:{searchingParams.brand}</h2>
      <h2>Page:{searchingParams.page}</h2>
      <ProductList />
    </div>
  );
};

export default Products;
