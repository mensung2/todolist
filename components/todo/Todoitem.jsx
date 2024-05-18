const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, isDone: !isDone } : todo))
    );
  };

  return (
    <div id="postit">
      <h2>{title}</h2>
      <p>{content}</p>
      <div id="btns">
        <button onClick={deleteTodo} id="deletbtn">
          삭제
        </button>
        <button onClick={toggleTodo} id="cancelbtn">
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
