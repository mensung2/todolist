const Todoform = ({setTodos}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    console.log("nextTodo :>> ",nextTodo);

    setTodos((prevTodos) => [...prevTodos, nextTodo])
    e.target.reset();
    
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          size="20"
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요"
          size="14"
          name="content"
        />
        <button id="makepost" type="submit">
          등록
        </button>
      </form>
    </div>
  );
};

export default Todoform;
