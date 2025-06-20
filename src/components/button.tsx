import { JSX } from "react";

interface ButtonProps {
  parentClass?: string;
  classname?: string;
  children: JSX.Element | string;
  onClickHandler?: (e?: any) => void;
  varient?: "white" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  onlyDisable?: boolean;
  loader?: boolean;
  bigButton?: boolean;
  btnRef?: any;
  style?: any;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <div className={`${props.parentClass ? props.parentClass : ""}`}>
        <button
          style={props.style && props.style}
          ref={props.btnRef && props.btnRef}
          type={`${props.type ? props.type : "button"}`}
          onClick={() => props.onClickHandler && props.onClickHandler()}
          disabled={props.onlyDisable ? true : false}
          className={`
          ${props.classname ? props.classname : ""} 
          ${props.onlyDisable ? "cursor-not-allowed" : ""}
      `}
        >
          <div className="flex justify-between items-center">
            {props.loader && props.onlyDisable ? (
              <div className="loader mr-2 w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
              props.children
            )}
          </div>
        </button>
      </div>
    </>
  );
};

export default Button;
