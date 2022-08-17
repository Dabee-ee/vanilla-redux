import { createStore } from "redux";

const countModifier = (count = 0) => {
  return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());

/*

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
const countModifier = (count = 0) => {
  return count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};
const countStore = createStore(countModifier);

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
console.log(countStore.getState());

 */
