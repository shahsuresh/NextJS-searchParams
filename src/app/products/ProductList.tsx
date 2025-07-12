"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const ProductList = () => {
  const queryParams = useSearchParams();
  console.log(queryParams, "FROM PRODUCTLIST PAGE-CLIENT COMPONENT");
  //   http://localhost:3000/products?category=shoes&brand=puma&page=5&page=6
  const pages = queryParams.get("page");
  const allPages = queryParams.getAll("page");
  const catagories = queryParams.get("category");
  const entries = Object.fromEntries(queryParams.entries());
  console.log("Page:", pages);
  console.log("Catagories:", catagories);
  console.log(allPages, "ALL PAGES");
  console.log("ENTRIES", entries);
  return (
    <div>
      <h1 className='text-red-600 border border-b-amber-50 text-center font-bold text-2xl'>
        Client
      </h1>
      <h2>PAGE:{pages}</h2>
      <h2>CATEGORY:{catagories}</h2>
      <h2>PAGES ALL {allPages}</h2>
    </div>
  );
};

export default ProductList;
