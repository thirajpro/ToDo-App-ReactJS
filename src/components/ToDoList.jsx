import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";
export default function ToDoList({ toDos, settoDos }) {
  const sortedtoDos = toDos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todolistContainer}>
      {sortedtoDos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          settoDos={settoDos}
          toDos={toDos}
        />
      ))}
    </div>
  );
}
