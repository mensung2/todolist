
const Todoform = () => {
  return (
    <div>
    <form>
        <input id="title" type="text" placeholder="제목을 입력하세요"  size="20" />
        <input id="content" type="text" placeholder="내용을 입력하세요"  size="14" />
        <button id="makepost" type="submit">등록</button>
    </form>
    </div>
  )
}

export default Todoform