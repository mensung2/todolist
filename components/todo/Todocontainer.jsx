import { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";

const Todocontainer = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "할 일 1",
      content: "할 일 내용1",
      isDone: false,
    }
  ]);

  return (
    <div>
      <Todoform setTodos={setTodos}/>
      <div>
        <Todolist />
        <Todolist />
      </div>
    </div>
  );
};

export default Todocontainer;
