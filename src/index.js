import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onchange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onchange);

const handleAdd = () => countStore.dispatch({ type: "ADD" });
const handleMinus = () => countStore.dispatch({ type: "MINUS" });

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// 개발자가 리듀서에게 메세지를 보내는 방법
// countModifier(currentState = 0, { type: "Hello" })
