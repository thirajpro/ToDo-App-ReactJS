import styles from "./todoitem.module.css";
export default function Todoitem({ item, settoDos, toDos }) {
  function handleDelete(item) {
    settoDos(toDos.filter((toDo) => toDo !== item));
  }
  function handleDone(name) {
    settoDos(
      toDos.map((newName) =>
        newName.name === name ? { ...newName, done: !newName.done } : newName
      )
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleDone(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
