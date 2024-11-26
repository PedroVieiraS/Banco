import logo from "../../assets/logo.svg";
import styles from "./header.module.css";

export default function Header({openModal}) {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={logo} alt="logo" className={styles.image} />
        </div>
        <div>
          <button className={styles.btn} onClick={openModal} >Nova Transação</button>
        </div>
      </div>
    </>
  );
}
