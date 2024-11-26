import styles from "./table.module.css";
import { Trash2 } from "react-feather";

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
                <button onClick={() => removeTransaction(index)}>
                  <Trash2 size={16} color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
