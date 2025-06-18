import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Merge,
  Path,
  UseFormRegister,
} from "react-hook-form";
import Select from "react-select";
import { StylesConfig } from "react-select";

interface Options {
  value: string;
  label: string;
}

interface InputProps<TForm extends FieldValues> {
  parentClass?: string;
  inputClass?: string;
  value?: string;
  placeholder?: string;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  type?: string;
  name: Path<TForm>;
  label?: string;
  options: Options[];
  register: UseFormRegister<TForm>;
  isMulti?: boolean;
  control: Control<TForm, any>;
  onExtChange?: (value: any) => void;
  isDisabled?: boolean;
  isClearable?: boolean;
  hideSelectedValue?: boolean;
}
export const customStyles: StylesConfig<Options | string> = {
  control: (state) => ({
    borderRadius: "50px",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "transparent",
    padding: "1px 14px",
    border: "1px solid #BDBDBD",
    outline: state.isFocused ? "2px solid #BDBDBD" : "",
  }),

  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    padding: "0",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#ddd",
    borderRadius: "100px",
    cursor: "pointer",
    color: "#000",
    padding: "2px 10px 2px 10px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#000",
    padding: "0",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: "50px",
    marginLeft: "10px",
    marginTop: "2px",
    transition: "all 0.3s",
    height: "18px",

    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
    padding: "0 2px",
  }),

  menu: (provided) => ({
    ...provided,
    zIndex: 100,
    backgroundColor: "#f6f9fd",
    borderRadius: "0",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    color: "#000",
    padding: "0px",
  }),
  menuList: (provided) => ({
    ...provided,
    color: "#FFFFFF",
    backgroundColor: "#f6f9fd",
    padding: "0",
    borderRadius: "0",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: " 400",
  }),
  option: () => ({
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "left",
    padding: "8px 15px",
    fontSize: " 1rem",
    lineHeight: "1.2",
    fontWeight: "500",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#5a1a97",
      color: "#fff",
    },
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    backgroundColor: "#f6f9fd",
    borderRadius: "0",
    color: "#000",
    "&:hover": {
      backgroundColor: "#d5f3ff",
    },
  }),
  placeholder: (provided) => {
    return {
      ...provided,
      color: "#BDBDBD",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: " 500",
      letterSpacing: " 0.05em",
    };
  },
};
const CustomSelect = <TForm extends Record<string, unknown>>(
  props: InputProps<TForm>
) => {
  const {
    name,
    register,
    parentClass,
    label,
    inputClass,
    placeholder,
    options,
    error,
    isMulti = false,
    control,
    onExtChange,
    isDisabled,
    isClearable,
    hideSelectedValue,
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
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Select
                isClearable={isClearable ? true : false}
                isDisabled={isDisabled ? isDisabled : false}
                {...(register && register(name))}
                controlShouldRenderValue={
                  hideSelectedValue !== undefined ? hideSelectedValue : true
                }
                className={`${inputClass || ""}cs-select`}
                placeholder={`${placeholder || `Choose ${label}`}`}
                {...rest}
                options={options}
                isMulti={isMulti}
                value={
                  isMulti
                    ? Array.isArray(value) &&
                      options.filter((option) => value.includes(option.value))
                    : options.find((c: Options) => c.value === value) || ""
                }
                styles={customStyles}
                onChange={(selectedOption: any) => {
                  if (Array.isArray(selectedOption)) {
                    const tempSelectedOption = selectedOption.map(
                      (obj) => obj.value
                    );
                    onChange(tempSelectedOption);
                    onExtChange && onExtChange(selectedOption);
                  } else if (selectedOption) {
                    onChange(selectedOption.value);
                    onExtChange && onExtChange(selectedOption);
                  } else {
                    onChange(null);
                  }
                }}
                onBlur={() => {
                  onBlur();
                }}
              />
            );
          }}
          rules={{ required: true }}
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

export default CustomSelect;
