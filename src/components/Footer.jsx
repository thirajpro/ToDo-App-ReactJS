import styles from "./footer.module.css";
export default function Footer({ completedtoDos, totaltoDos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed toDos : {completedtoDos}</span>
      <span className={styles.item}>Total toDos : {totaltoDos}</span>
    </div>
  );
}
