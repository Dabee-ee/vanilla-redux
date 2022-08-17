import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To do</h1>
      <form>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onSubmit}>등록</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
