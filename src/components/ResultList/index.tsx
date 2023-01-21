import { useAntecipationContext } from '../../context'

export const ResultList = () => {
  const { antecipations } = useAntecipationContext()
  const days: string[] = Object.keys(antecipations)
  const values: string[] = Object.values(antecipations)

  return (
    <ul>
      {days.map((day, index) => {
        return (
          <li key={index}>
            {day === '1' ? 'Amanhã' : `Em ${day} dias`}: R$ {values[index]}
          </li>
        )
      })}
    </ul>
  )
}
