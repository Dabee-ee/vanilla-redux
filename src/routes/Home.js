import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(add(text));
    setText("");
  };
  return (
    <>
      <h1>To do</h1>
      <form>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onSubmit}>등록</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

// function mapStateToProps(state, ownProps) {
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return { adToDo: (text) => dispatch(actionCreators.adToDo(text)) };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
