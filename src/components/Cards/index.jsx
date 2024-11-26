import styles from "./cards.module.css";

export default function Cards({name, valor, img, className}) {
  return (
    <>
      <div className={`${styles.card} ${className || ""}`}>
        <div className={styles.container}>
          <h1 className={styles.title}>{name}</h1>
          {img && <img src={img} alt={`${name} icon`} />}
        </div>
        <div className={styles.contentvalue}>
          <h1 className={styles.value}>{valor}</h1>
        </div>
      </div>
    </>
  );
}
