import React, { useState } from "react";

const App = () => {
  // 함수 들어가는 곳
  // JS 들어가는 곳

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cards, setCards] = useState({});

  return (
    <body
      style={{
        height: "100%",
        background: "#7290ce",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1200px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <section
          style={{
            width: "100%",
            height: "350px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>My Todo List</h3>
            <h3>React</h3>
          </div>
          <div
            style={{
              width: "80%",
              height: "40%",
              backgroundColor: "aliceblue",
              margin: "auto",
              /* justify-content: center; 를 .heder에 먹였는데 정렬이 안 돼서 일단 margin으로 때움. */
              display: "flex",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                style={{
                  height: "57%",
                  fontWeight: "bold",
                  fontSize: "25px",
                  textIndent: "10px",
                  border: "none",
                  backgroundColor: "#f0f4ff",
                }}
                type="text"
                placeholder="제목을 입력하세요"
                size="20"
              />
              <input
                onChange={(event) => {
                  setContent(event.target.value);
                }}
                style={{
                  height: "43%",

                  fontSize: "16px",
                  textIndent: "10px",
                  border: "none",
                  backgroundColor: "#f0f4ff",
                }}
                type="text"
                placeholder="내용을 입력하세요"
                size="14"
              />
            </div>
            <button
              style={{
                width: "10%",
                height: "100%",
                border: "none",
                color: "aliceblue",
                backgroundColor: "#4c5ab4",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              onClick={() => {
                const newCard = { title: title, content: content };
                setCards([newCard, ...cards]);
              }}
            >
              등록
            </button>
          </div>
        </section>
        <section
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "80px 80px 0 0",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "30%",
              marginTop: "80px",
            }}
          >
            <h1>Working</h1>
            <div id="postit-list">
          
            </div>
          </div>
        </section>
      </div>
    </body>
  );
};

export default App;

// 완료와 미완료 사이를 이동하는 함수를 구현하지 못해서 일단 비슷하게 만들고 빼뒀다.
// <div>
//             <h1>Done</h1>
//             <div id="postit-list">
//               <div id="postit">
//                 <h2>제목이에용</h2>
//                 <p>내용입니당</p>
//                 <div>
//                   <button id="deletbtn">삭제</button>
//                   <button id="cancelbtn">재설정</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//{cards.map((card) => {
//  return (
//    <div>
//      <h2>{card.title}</h2>
//      <p>{card.content}</p>
//      <div>
//        <button>삭제</button>
//        <button>완료</button>
//      </div>
//    </div>
//  );
//})}