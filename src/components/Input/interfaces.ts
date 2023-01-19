import { UseFormRegister } from 'react-hook-form'

export interface IInputKeys {
  saleValue: string
  installments: number
  mdr: number
}

export interface InputProps {
  id: string
  label?: string
  type: string
  register: UseFormRegister<IInputKeys>
  errors: string | undefined
  required?: boolean
}
