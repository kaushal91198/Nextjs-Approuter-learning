import React, { useRef } from "react";
import Image from "next/image";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import Button from "./button";

interface FileUploadProps<TForm extends FieldValues> {
  name: Path<TForm>;
  parentClass?: string;
  label?: string;
  control: Control<TForm, any>;
  error: any;
  register: UseFormRegister<TForm>;
  value: File | File[];
  maxFiles?: number;
  imgClass: string;
  removeImage?: (index: number) => void;
  accept?: string;
}

interface showImageProps {
  imgClass: string;
  removeImage?: (index: number) => void;
  file: File;
  imgIndex: number;
}

const ShowImage = ({
  removeImage,
  file,
  imgIndex,
  imgClass,
}: showImageProps) => {
  return (
    <div className="relative w-24 h-24 rounded overflow-hidden border border-gray-200">
      <Image
        src={URL.createObjectURL(file)}
        alt={`Image ${imgIndex + 1}`}
        width={100}
        height={100}
        className={`object-cover w-full h-full ${imgClass}`}
      />
      {removeImage && (
        <Button
          type="button"
          onClickHandler={() => {
            removeImage(imgIndex);
          }}
          classname="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center hover:bg-red-600"
        >
          ×
        </Button>
      )}
    </div>
  );
};

const FileUpload = <TForm extends Record<string, unknown>>({
  name,
  parentClass,
  label,
  control,
  error,
  register,
  maxFiles = 1,
  value,
  imgClass,
  removeImage,
  accept = "*/*",
}: FileUploadProps<TForm>) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (files: File[]) => void
  ) => {
    const files = e.target.files;
    if (files) {
      let selectedFiles = [...Array.from(files)];
      let fileValue = value && !Array.isArray(value) ? [value] : value;
      if (fileValue) {
        selectedFiles = [...selectedFiles, ...fileValue];
      }
      onChange(selectedFiles);
    }
  };

  return (
    <div className={`${parentClass || ""} relative`}>
      {label && (
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <div className="flex flex-wrap gap-4 items-center border border-gray-300 p-4 rounded-xl">
              {value &&
                (Array.isArray(value) ? (
                  value.map((file: any, index: number) => (
                    <ShowImage
                      imgClass={imgClass}
                      removeImage={removeImage}
                      imgIndex={index}
                      file={file}
                    />
                  ))
                ) : (
                  <div className="relative w-24 h-24 rounded overflow-hidden border border-gray-200">
                    <ShowImage
                      imgClass={imgClass}
                      removeImage={removeImage}
                      imgIndex={0}
                      file={value}
                    />
                  </div>
                ))}

              {(!Array.isArray(value) || value.length < maxFiles) && (
                <Button
                  type="button"
                  classname="w-24 h-24 border-2 border-dashed border-purple-400 rounded-lg text-purple-500 text-3xl font-bold flex items-center justify-center hover:bg-purple-50 transition"
                  onClickHandler={() => inputRef.current?.click()}
                >
                  +
                </Button>
              )}
            </div>

            <input
              {...register(name)}
              ref={inputRef}
              type="file"
              multiple={maxFiles > 1}
              className="hidden"
              onChange={(e) => handleFilesChange(e, field.onChange)}
              accept={accept}
            />
          </>
        )}
      />

      {error && (
        <span className="text-sm text-red-500 mt-2 block">{error.message}</span>
      )}
    </div>
  );
};

export default FileUpload;
