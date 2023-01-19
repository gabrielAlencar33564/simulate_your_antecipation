import { ReactNode } from 'react'

export interface IAntecipationProvider {
  children: ReactNode
}
export interface IAntecipationContext {}

export interface IInputKeys {
  amount: string
  installments: number
  mdr: number
}
