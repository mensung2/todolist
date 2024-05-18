import TodoItem from "./TodoItem";

const Todolist = ({ title, todos }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul id="postit-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
