import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

export default function Todo() {
  const [toDos, settoDos] = useState([]);
  const completedtoDos = toDos.filter((todo) => todo.done).length;
  const totaltoDos = toDos.length;
  return (
    <div>
      <Form toDos={toDos} settoDos={settoDos} />
      <ToDoList toDos={toDos} settoDos={settoDos} />
      <Footer completedtoDos={completedtoDos} totaltoDos={totaltoDos} />
    </div>
  );
}
