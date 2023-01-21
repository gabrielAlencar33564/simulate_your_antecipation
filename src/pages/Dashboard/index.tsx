import { FormDashboard } from '../../components/FormDashboard'
import { ResultList } from '../../components/ResultList'

export const Dashboard = () => {
  return (
    <main>
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
