const Todoform = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if ((!title.trim(), !content.trim()))
      return alert("제목과 내용을 입력하세요.");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    console.log("nextTodo :>> ", nextTodo);

    setTodos((prevTodos) => [...prevTodos, nextTodo]);
    e.target.reset();
  };

  return (
    <div id="header">
      <form onSubmit={onSubmit} id="postbox">
        <div id="inputbox">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            size="20"
            name="title"
            id="titlebox"
          />
          <input
            type="text"
            placeholder="내용을 입력하세요"
            size="14"
            name="content"
            id="contentbox"
          />
        </div>
        <button id="makepost" type="submit">
          등록
        </button>
      </form>
    </div>
  );
};

export default Todoform;
