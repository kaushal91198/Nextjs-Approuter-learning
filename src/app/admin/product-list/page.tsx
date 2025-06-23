import { getProducts } from "@/api/products";
import ProductCard from "@/components/ProductCard";
import { cookies } from "next/headers";

const AllProducts = async () => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
  const { data } = await getProducts(cookieHeader);
  return (
    <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
      <div className="flex flex-col items-end pt-12">
        <p className="text-2xl font-medium">All products</p>
        <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
        {data.map((product: any, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
