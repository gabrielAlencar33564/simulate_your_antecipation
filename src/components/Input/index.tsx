import { InputProps, IInputKeys } from './interfaces'
import { FieldPath } from 'react-hook-form'

export const Input = ({ required = false, ...props }: InputProps) => {
  return (
    <>
      {props.label && (
        <label htmlFor={props.id}>
          {props.label}
          {required && <span>*</span>}
        </label>
      )}
      <input
        type={props.type}
        id={props.id}
        {...props.register(props.id as FieldPath<IInputKeys>)}
      />
      {props.errors && <span>Campo Obrigatório</span>}
    </>
  )
}
