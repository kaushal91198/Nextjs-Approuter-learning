import { ChangeEvent } from "react";
import {
  FieldError,
  FieldValues,
  Merge,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface InputProps<TForm extends FieldValues> {
  parentClass?: string;
  inputClass?: string;
  value?: string;
  placeholder?: string;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  type?: string;
  name: Path<TForm>;
  label?: string;
  register?: UseFormRegister<TForm>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  labelClass?: string;
  setViewPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  viewPassword?: boolean;
  disabled?: boolean;
}
const Input = <TForm extends Record<string, unknown>>(
  props: InputProps<TForm>
) => {
  const {
    parentClass,
    label,
    inputClass,
    labelClass,
    type,
    name,
    placeholder,
    register,
    error,
    onChange,
    setViewPassword,
    viewPassword,
    ...rest
  } = props;

  return (
    <>
      <div className={`${parentClass ? parentClass : ""}`}>
        <input
          className={`${inputClass ? inputClass : ""} `}
          type={`${type ? type : "text"}`}
          placeholder={`${placeholder ? placeholder : ""}`}
          value={rest.value}
          {...rest}
          {...(register &&
            register(
              name,
              onChange && {
                onChange: (e) => onChange(e),
              }
            ))}
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

export default Input;
