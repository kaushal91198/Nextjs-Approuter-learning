import { JSX } from "react";

interface ButtonProps {
  parentClass?: string;
  classname?: string;
  children: JSX.Element | string;
  onClickHandler?: (e?: any) => void;
  varient?: "white" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  onlyDisable?: boolean;
  loader?: JSX.Element;
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
          {props.loader}
          {props.children}
        </button>
      </div>
    </>
  );
};

export default Button;
