import { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

const Todocontainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "하고있는 일",
      content: "하는 중...",
      isDone: false,
    },
    {
      id: 2,
      title: "완료된 할 일",
      content: "끝냄!",
      isDone: true,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <Todoform setTodos={setTodos} />
      <div id="todobody">
        <Todolist title="Working" todos={workingTodos} setTodos={setTodos} />
        <Todolist title="Done" todos={doneTodos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default Todocontainer;
