

import {
  FieldError,
  FieldValues,
  Merge,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface TextAreaProps<TForm extends FieldValues> {
  parentClass?: string;
  inputClass?: string;
  value?: string;
  placeholder?: string;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  type?: string;
  name: Path<TForm>;
  label?: string;
  register?: UseFormRegister<TForm>;
  fieldLimit?: number;
}
const TextArea = <TForm extends Record<string, unknown>>(
  props: TextAreaProps<TForm>
) => {
  const {
    parentClass,
    label,
    inputClass,
    type,
    name,
    placeholder,
    register,
    error,
    fieldLimit,
    ...rest
  } = props;
  return (
    <>
      <div className={`${parentClass ? parentClass : ""} relative`}>
        {label && (
          <label className="block mb-3 text-base font-bold text-black">
            {label}
          </label>
        )}
        <textarea
          className={`${inputClass ? inputClass : ""} 
          text-lg/6 text-black py-1 px-4 border leading-25px border-solid border-customBorder rounded-20 block w-full placeholder:text-black focus:border-purple focus:ring-2 focus:ring-purple focus:ring-offset-[2px] transition-all duration-300`}
          placeholder={`${placeholder ? placeholder : ""}`}
          {...(register && register(name))}
          {...rest}
          maxLength={fieldLimit}
        />
        {error && (
          <span className="text-sm font-semibold text-red-500 block text-left mt-1">
            {error.message}
          </span>
        )}
      </div>
    </>
  );
};

export default TextArea;
