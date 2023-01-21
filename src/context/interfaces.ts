import { ReactNode } from 'react'

export interface IAntecipationProvider {
  children: ReactNode
}
export interface IAntecipationContext {
  postAntecipation: (data: IInputKeys) => Promise<void>
  antecipations: {}
}

export interface IInputKeys {
  amount: string
  installments: number
  mdr: number
}
