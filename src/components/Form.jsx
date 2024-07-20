import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ toDos, settoDos }) {
  const [toDo, settoDo] = useState({ name: "", done: false });
  function submitHandler(e) {
    e.preventDefault();
    settoDos([...toDos, toDo]);
    settoDo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => settoDo({ name: e.target.value, done: false })}
          type="text"
          value={toDo.name}
          placeholder="Enter todo item..."
        ></input>
        <button className={styles.modernButton} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
