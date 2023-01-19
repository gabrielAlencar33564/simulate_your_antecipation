import { createContext, useContext } from 'react'
import { IAntecipationContext, IAntecipationProvider } from './interfaces'

const AntecipationContext = createContext<IAntecipationContext>(
  {} as IAntecipationContext,
)

export const AntecipationProvider = ({ children }: IAntecipationProvider) => {
  return (
    <AntecipationContext.Provider value={{}}>
      {children}
    </AntecipationContext.Provider>
  )
}

export const useAntecipationContext = (): IAntecipationContext => {
  const context = useContext(AntecipationContext)
  return context
}
