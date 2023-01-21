import { createContext, useContext, useState } from 'react'
import { IAntecipationContext, IAntecipationProvider } from './interfaces'
import { api } from '../services/api'
import { SubmitHandler } from 'react-hook-form'
import { IInputKeys } from './interfaces'
import { AxiosError } from 'axios'

const AntecipationContext = createContext<IAntecipationContext>(
  {} as IAntecipationContext,
)

export const AntecipationProvider = ({ children }: IAntecipationProvider) => {
  const [antecipations, setAntecipations] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [statusError, setStatusError] = useState<number>(200)

  const postAntecipation: SubmitHandler<IInputKeys> = (data) => {
    setIsLoading(true)
    const amount = data.amount
      .split('')
      .filter((value) => {
        if (value !== '.') return value
      })
      .join('')
      .replace(',', '.')

    api
      .post('?internalError', {
        ...data,
        amount: +amount,
      })
      .then((res) => {
        console.log(res, 'passou')
        setAntecipations(res.data)
      })
      .catch((err: AxiosError) => {
        const { response } = err
        setStatusError(response?.status as number)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <AntecipationContext.Provider
      value={{
        postAntecipation,
        antecipations,
        isLoading,
        statusError,
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
