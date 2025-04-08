// /* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";
import ProductsDesktop from "./ProductsDesktop";
import ProductsMobile from "./ProductsMobile";

const Products = () => {
  return (
    <section className="mx-auto container p-5 mt-10">
      <div className="flex flex-col justify-between items-center sm:flex sm:flex-row">
        <h1 className="text-4xl uppercase font-light tracking-wider">
          Our creations
        </h1>
        <div className="hidden sm:block">
          <Button />
        </div>
      </div>

      {/* Grid Section */}
      <div className="">
        <div className="hidden lg:block">
          <ProductsDesktop />
        </div>
        <div className="block lg:hidden">
          <ProductsMobile />
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Products;
