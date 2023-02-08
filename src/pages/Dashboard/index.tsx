import { FormDashboard } from "../../components/FormDashboard";
import { ResultList } from "../../components/ResultList";
import { useAntecipationContext } from "../../context";
import { Error } from "../../components/Error";
import "./styled.css";
import "../../style/global.css";

export const Dashboard = () => {
  const { isLoading } = useAntecipationContext();
  return (
    <main>
      <div className="antecipation_simulation">
        <h1 className="text_1">Simule sua Antecipação</h1>
        <FormDashboard />
      </div>
      <div className="list_antecipation">
        <h2 className="text_2 text_list_antecipation">VOCÊ RECEBERÁ:</h2>
        <ResultList />
        {isLoading && <div className="loading"></div>}
      </div>
      <Error />
    </main>
  );
};
