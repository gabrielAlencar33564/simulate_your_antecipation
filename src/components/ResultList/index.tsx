import { useAntecipationContext } from "../../context";
import { priceFormated } from "../../utils";
import "../../style/global.css";
import "./style.css";

export const ResultList = () => {
  const { antecipations } = useAntecipationContext();
  const days: string[] = Object.keys(antecipations);
  const values: string[] = Object.values(antecipations);

  return (
    <ul>
      {days.map((day, index) => {
        return (
          <li key={index} className="text_2">
            {day === "1" ? "Amanhã" : `Em ${day} dias`}:{" "}
            <span>{priceFormated.format(+values[index])}</span>
          </li>
        );
      })}
    </ul>
  );
};
