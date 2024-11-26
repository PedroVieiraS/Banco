import styles from "./table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Table({ transacoes, removeTransaction }) {

  const dateFormatter = (dateString) => {
    if (!dateString) return "Data inválida";

    
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Data inválida"; 
    }

    return date.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className={styles.container}>
      <table>
        <thead className={styles.table}>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((transacao, index) => (
            <tr key={index}>
              <td>{transacao.nome}</td>
              <td>{Number(transacao.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
              <td>{transacao.categoria}</td>
              <td>{dateFormatter(transacao.hora)}</td>
              <td>
                <button className={styles.iconbtn} onClick={() => removeTransaction(index)}>
                  <FontAwesomeIcon color="red" icon={faTrashCan} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
