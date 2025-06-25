import React from "react";
import ProductCard from "./ProductCard";
import { cookies } from "next/headers";
import { getProducts } from "@/api/products";

const HomeProducts = async () => {
  // const cookieStore = await cookies();
  // const cookieHeader = cookieStore
  //   .getAll()
  //   .map((c) => `${c.name}=${c.value}`)
  //   .join("; ");
  // const { data } = await getProducts(cookieHeader);
  const { data } = await getProducts();

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Popular products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {data.map((product:any, index:number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
