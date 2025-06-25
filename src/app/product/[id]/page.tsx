"use client";
import { useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { setRedirectLink } from "@/redux/slices/userSlice";
import React from "react";
import { useGetProduct } from "@/hooks/product/useProduct";
import Loader from "@/app/loading";
import Button from "@/components/button";
import Navbar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Product = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const router = useRouter();
  const {
    data: productData,
    getProduct,
    loading: productLoader,
  } = useGetProduct();

  useEffect(() => {
    getProduct(id);
  }, []);

  const onClickBuyBtn = () => {
    if (!user.isAuthenticated) {
      dispatch(setRedirectLink(`product/buy/${id}`));
      router.push("/login");
    } else {
      router.push(`product/buy/${id}`);
    }
  };

  return !productLoader ? (
    <>
      <Navbar isAdmin={false} />
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="px-5 lg:px-16 xl:px-20">
            <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
              {productData?.data[0]?.images[0] && (
                <Image
                  src={productData.data[0].images[0]}
                  alt="alt"
                  className="w-full h-auto object-cover mix-blend-multiply"
                  width={1280}
                  height={720}
                />
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {productData?.data[0]?.images &&
                productData.data[0].images.map(
                  (image: string, index: number) => (
                    <div
                      key={index}
                      onClick={() => {}}
                      className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
                    >
                      <Image
                        src={image}
                        alt="alt"
                        className="w-full h-auto object-cover mix-blend-multiply"
                        width={1280}
                        height={720}
                      />
                    </div>
                  )
                )}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
              {productData?.data[0]?.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />
                <Image
                  className="h-4 w-4"
                  src={assets.star_dull_icon}
                  alt="star_dull_icon"
                />
              </div>
              <p>(4.5)</p>
            </div>
            <p className="text-gray-600 mt-3">
              {productData?.data[0]?.description}
            </p>
            <p className="text-3xl font-medium mt-6">
              ${productData?.data[0]?.offerprice}
              <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                ${productData?.data[0]?.price}
              </span>
            </p>
            <hr className="bg-gray-600 my-6" />
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full max-w-72">
                <tbody>
                  <tr>
                    <td className="text-gray-600 font-medium">Brand</td>
                    <td className="text-gray-800/50 ">Generic</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Color</td>
                    <td className="text-gray-800/50 ">Multi</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Category</td>
                    <td className="text-gray-800/50">
                      {productData?.data[0]?.category_id?.name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center mt-10 gap-4">
              <Button
                onClickHandler={() => {}}
                classname="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition px-10 rounded-xl"
                onlyDisable={true}
              >
                Add to Cart
              </Button>
              <Button
                classname="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition px-10 rounded-xl"
                onClickHandler={() => onClickBuyBtn()}
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Product;
