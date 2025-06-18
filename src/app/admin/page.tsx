"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Input from "@/components/input";
import { ProductFormFields } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "@/validationSchema/product.schema";
import CustomSelect from "@/components/CustomSelect";
import TextArea from "@/components/TextArea";
import FileUpload from "@/components/FileUpload";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm<ProductFormFields>({
    resolver: yupResolver(productSchema),
    defaultValues: {
      price: 0,
      offer_price: 0,
    },
  });
  const formValues = watch();

  const handleProduct = handleSubmit(async (value: ProductFormFields) => {
    try {
    } catch (error) {
      console.log(error);
    }
  });

  const removeImage = (imgIndex: number) => {
    const images: any = formValues.images;
    images.splice(imgIndex, 1);
    setValue("images", images);
  };
  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <form onSubmit={handleProduct} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <Input<ProductFormFields>
            name="name"
            register={register}
            error={errors.name}
            placeholder="Product Name"
            type="email"
            parentClass="mb-30px last:mb-0"
            inputClass="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <TextArea<ProductFormFields>
            name="description"
            register={register}
            error={errors.description}
            type="textarea"
            parentClass="mb-30px last:mb-0"
            fieldLimit={100}
            inputClass="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
          />
        </div>
        <div>
          <p className="text-base font-medium">Product Image</p>

          <FileUpload
            register={register}
            control={control}
            name="images"
            error={errors.images}
            parentClass="mb-30px last:mb-0"
            accept={"image/png, image/jpeg, image/jpg"}
            value={formValues.images}
            imgClass="w-1/2 m-auto mt-3 h-56 object-contain"
            removeImage={removeImage}
            maxFiles={5}
          />
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex flex-col gap-1 ">
            <label className="text-base font-medium" htmlFor="category">
              Category
            </label>
            <CustomSelect<ProductFormFields>
              placeholder="Choose category"
              name="category_id"
              register={register}
              error={errors.category_id}
              parentClass="mb-30px last:mb-0"
              options={[1, 2, 3, 4].map((author: any) => {
                return {
                  value: author,
                  label: author,
                };
              })}
              control={control}
              inputClass="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <Input<ProductFormFields>
              name="price"
              register={register}
              error={errors.price}
              placeholder="Price"
              type="number"
              inputClass="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <Input<ProductFormFields>
              name="offer_price"
              register={register}
              error={errors.offer_price}
              placeholder="Offer Price"
              type="number"
              inputClass="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded"
        >
          ADD
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default AddProduct;
