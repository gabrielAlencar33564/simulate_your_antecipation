import { createContext, useContext, useState } from 'react'
import { IAntecipationContext, IAntecipationProvider } from './interfaces'
import { api } from '../services/api'
import { SubmitHandler } from 'react-hook-form'
import { IInputKeys } from './interfaces'

const AntecipationContext = createContext<IAntecipationContext>(
  {} as IAntecipationContext,
)

export const AntecipationProvider = ({ children }: IAntecipationProvider) => {
  const [days, setDays] = useState([])
  console.log(days)
  const postAntecipation: SubmitHandler<IInputKeys> = async (data) => {
    const amount = data.amount
      .split('')
      .filter((value) => {
        if (value !== '.') return value
      })
      .join('')
      .replace(',', '.')

    try {
      const response = await api.post('', { ...data, amount: +amount })
      setDays(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AntecipationContext.Provider
      value={{
        postAntecipation,
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
