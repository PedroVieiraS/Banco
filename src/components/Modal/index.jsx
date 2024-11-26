import styles from "./modal.module.css";
import downcircle from "../../assets/downcircle.svg";
import upcircle from "../../assets/upcircle.svg";
import { useState } from "react";

export default function Modal({ closeModal, onSubmit }) {
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    categoria: "",
    tipo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.nome || !formData.preco || !formData.categoria || !formData.tipo) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }

    const currentDate = new Date().toISOString();
    const updatedFormData = { ...formData, hora: currentDate };
  
    onSubmit(updatedFormData);
  
    setFormData({
      nome: "",
      preco: "",
      categoria: "",
      tipo: "",
      hora:"",
    });
  };

  return (
    <div className={styles.modaloverlay}>
      <div className={styles.modalcontent}>
        <div className={styles.divbtn}>
          <button onClick={closeModal} className={styles.BtnFechar}>
            X
          </button>
        </div>
        <div className={styles.divtext}>
          <h2>Cadastrar Transação</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.containerinput}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="text"
              name="preco"
              placeholder="Preço"
              value={formData.preco}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.containerbtn}>
            <button
              type="button"
              className={styles.btnFunction}
              onClick={() => setFormData({ ...formData, tipo: "entrada" })}
            >
              <img className={styles.icon} src={downcircle} alt="" /> Entrada
            </button>
            <button
              type="button"
              className={styles.btnFunction}
              onClick={() => setFormData({ ...formData, tipo: "saida" })}
            >
              <img className={styles.icon} src={upcircle} alt="" /> Saída
            </button>
          </div>
          <input
            type="text"
            name="categoria"
            placeholder="Categoria"
            value={formData.categoria}
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.btnCadastrar}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
