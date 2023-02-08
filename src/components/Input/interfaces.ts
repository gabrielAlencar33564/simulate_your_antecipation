import { UseFormRegister } from "react-hook-form";
import { IInputKeys } from "../../context/interfaces";

export interface InputProps {
  id: string;
  label?: string;
  type: string;
  register: UseFormRegister<IInputKeys>;
  errors: string | undefined;
  required?: boolean;
  placeholder?: string;
}
