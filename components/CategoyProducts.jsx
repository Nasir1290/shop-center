"use client";

import React, { useState } from "react";
import SingleProducts from "./SingleProducts";
import ProductData from "../data/products.json";

const allProducts = ProductData.products;

let categorys = [];

allProducts.map((product) => {
  if (!categorys.includes(product.category)) {
    categorys.push(product.category);
  }
});

const CategoryProducts = () => {
  const [filteredProducts, setFilterdProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleFilterProducts = (category) => {
    if (category === "all") {
      setFilterdProducts(allProducts);
      setActiveCategory("all");
    } else {
      const categorizedProducts = allProducts.filter((product) => {
        return product.category === category;
      });
      setActiveCategory(category);
      setFilterdProducts(categorizedProducts);
    }
  };

  return (
    <main>
      <section className=" w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className=" font-bold bg-yellow-500 mr-4 rounded-md text-center text-black w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <button
            className={` mb-1 px-2 rounded-lg m-auto hover:border-b border-black block h-6 box-border mt-4 ${
              !activeCategory || activeCategory === "all" ? "text-blue-600 bg-green-300" : "black"
            }`}
            onClick={() => handleFilterProducts("all")}
          >
            All
          </button>
          <hr />
          {categorys.map((category, index) => (
            <>
              <button
                onClick={() => handleFilterProducts(category)}
                key={index}
                className={` mb-1 px-2 rounded-lg m-auto hover:border-b border-black block h-6 box-border mt-5 ${
                  activeCategory === category ? "text-blue-600 bg-green-300" : "black"
                }`}
              >
                {category}
              </button>
              <hr />
            </>
          ))}
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {filteredProducts.map((product) => (
            <SingleProducts key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryProducts;
