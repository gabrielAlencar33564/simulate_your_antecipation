import { ReactNode } from 'react'

export interface IAntecipationProvider {
  children: ReactNode
}
export interface IAntecipationContext {
  postAntecipation: (data: IInputKeys) => Promise<void>
}

export interface IInputKeys {
  amount: string
  installments: number
  mdr: number
}
