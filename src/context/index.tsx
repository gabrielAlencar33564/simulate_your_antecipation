import { createContext, useContext, useState } from 'react'
import { IAntecipationContext, IAntecipationProvider } from './interfaces'
import { api } from '../services/api'
import { SubmitHandler } from 'react-hook-form'
import { IInputKeys } from './interfaces'
import { AxiosError } from 'axios'

interface teste {
  error: any
}

const AntecipationContext = createContext<IAntecipationContext>(
  {} as IAntecipationContext,
)

export const AntecipationProvider = ({ children }: IAntecipationProvider) => {
  const [antecipations, setAntecipations] = useState([])

  const postAntecipation: SubmitHandler<IInputKeys> = (data) => {
    const amount = data.amount
      .split('')
      .filter((value) => {
        if (value !== '.') return value
      })
      .join('')
      .replace(',', '.')

    api
      .post('?oi', {
        ...data,
        amount: +amount,
      })
      .then((res) => {
        console.log(res, 'passou')
        setAntecipations(res.data)
      })
      .catch((err: AxiosError) => {
        const { response } = err
        console.log(response)
      })
  }

  return (
    <AntecipationContext.Provider
      value={{
        postAntecipation,
        antecipations,
      }}
    >
      {children}
    </AntecipationContext.Provider>
  )
}

export const useAntecipationContext = (): IAntecipationContext => {
  const context = useContext(AntecipationContext)
  return context
}
