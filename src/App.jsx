import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import icon from "./assets/icon.svg";
import iconUp from "./assets/iconUp.svg";
import styles from "./components/Cards/cards.module.css";
import Table from "./components/Table";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transacoes, setTransacoes] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCadastrar = (formData) => {
    const preco = parseFloat(formData.preco.replace(",", ".")); 
    const updatedFormData = { ...formData, preco };

    
    const storedTransacoes = JSON.parse(localStorage.getItem("transacoes") || "[]");
    const updatedTransacoes = [...storedTransacoes, updatedFormData];

    
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
    setTransacoes(updatedTransacoes);
    closeModal();
  };

  const handleRemoveTransaction = (index) => {
    const updatedTransacoes = transacoes.filter((_, i) => i !== index);
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
    setTransacoes(updatedTransacoes);
  };

  useEffect(() => {
    const storedTransacoes = JSON.parse(localStorage.getItem("transacoes") || "[]");
    setTransacoes(storedTransacoes);
  }, []);

  
  const totalEntradas = transacoes
    .filter(transacao => transacao.tipo === "entrada")
    .reduce((total, transacao) => total + (parseFloat(transacao.preco) || 0), 0);

  const totalSaidas = transacoes
    .filter(transacao => transacao.tipo === "saida")
    .reduce((total, transacao) => total + (parseFloat(transacao.preco) || 0), 0);

  
  const saldoTotal = totalEntradas - totalSaidas;

  return (
    <>
      <div className="container">
        <Header openModal={openModal} />
        <div className="cards">
          <Cards name="Entradas" valor={totalEntradas.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} img={icon} />
          <Cards name="Saídas" valor={totalSaidas.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} img={iconUp} />
          <Cards name="Saldo Total" valor={saldoTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} className={styles.saldoTotal} />
        </div>
        <Table transacoes={transacoes} removeTransaction={handleRemoveTransaction} />
        {isModalOpen && <Modal closeModal={closeModal} onSubmit={handleCadastrar} />}
      </div>
    </>
  );
}

export default App;

