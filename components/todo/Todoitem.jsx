const TodoItem = ({ todo }) => {
  return (
    <div id="postit">
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
      <div id="btns">
        <button id="deletbtn">삭제</button>
        <button id="cancelbtn">완료</button>
      </div>
    </div>
  );
};

export default TodoItem;
