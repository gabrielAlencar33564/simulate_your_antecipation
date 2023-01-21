import { ReactNode } from 'react'

export interface IAntecipationProvider {
  children: ReactNode
}
export interface IAntecipationContext {
  postAntecipation: (data: IInputKeys) => Promise<void>
  antecipations: {}
  isLoading: boolean
  statusError: number
}

export interface IInputKeys {
  amount: string
  installments: number
  mdr: number
}

export interface ApiResponseProps {
  message: string
  status: number
}
