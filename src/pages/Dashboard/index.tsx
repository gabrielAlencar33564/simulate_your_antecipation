import { FormDashboard } from '../../components/FormDashboard'
import { ResultList } from '../../components/ResultList'
import { useAntecipationContext } from '../../context'
import { Error } from '../../components/Error'

export const Dashboard = () => {
  const { isLoading } = useAntecipationContext()
  return (
    <main>
      {isLoading && <p>loading...</p>}
      <Error />
      <div>
        <h1>Simule sua Antecipação</h1>
        <FormDashboard />
      </div>
      <div>
        <h2>VOCÊ RECEBERÁ:</h2>
        <ResultList />
      </div>
    </main>
  )
}
