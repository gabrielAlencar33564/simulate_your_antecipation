import { useAntecipationContext } from "../../context";
import "./style.css";
import "../../style/global.css";

export const Error = () => {
  const { statusError } = useAntecipationContext();
  return (
    <>
      {statusError === 500 && (
        <div className="container_error">
          <div className="modal_error">
            <h1 className="text_1">{statusError} Server Error</h1>
            <h2>Oops, algo deu errado.</h2>
            <p>
              Tente atualizar a página, se o problema ainda persistir entre em contato
              conosco.
            </p>
          </div>
        </div>
      )}

      {statusError === 408 && (
        <div className="container_error">
          <div className="modal_error">
            <h1 className="text_1">{statusError} Time-out</h1>
            <h2>Oops, algo deu errado.</h2>
            <p>seu navegador não enviou uma solicitação completa a tempo.</p>
          </div>
        </div>
      )}
    </>
  );
};
