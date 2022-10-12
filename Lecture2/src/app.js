import { createDOM, createElement } from "./react";

const vdom = createElement(
  "p",
  {},
  createElement("h1", {}, "리액트 만들기"),
  createElement(
    "ul",
    {},
    createElement("li", { style: "color: blue" }, "첫번째 아이템"),
    createElement("li", { style: "color: green" }, "두번째 아이템"),
    createElement("li", { style: "color: purple" }, "세번째 아이템")
  )
);

document.querySelector("#root").appendChild(createDOM(vdom));
