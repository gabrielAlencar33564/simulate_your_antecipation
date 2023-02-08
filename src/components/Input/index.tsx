import { InputProps } from "./interfaces";
import { IInputKeys } from "../../context/interfaces";
import { FieldPath } from "react-hook-form";
import "./style.css";
import "../../style/global.css";

export const Input = ({ required = false, ...props }: InputProps) => {
  return (
    <div className="container_input">
      {props.label && (
        <label className="text_3" htmlFor={props.id}>
          {props.label}
          {required && <span> *</span>}
        </label>
      )}
      <div className={`input`}>
        {props.id === "amount" && <span>R$</span>}
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          {...props.register(props.id as FieldPath<IInputKeys>)}
        />
        {props.errors && <span className="error">{props.errors}</span>}
      </div>
      {props.id === "installments" && (
        <span className="text_4">Máximo de 12 parcelas</span>
      )}
    </div>
  );
};
