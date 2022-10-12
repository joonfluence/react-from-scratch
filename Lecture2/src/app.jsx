/* @jsx createElement */
import { createDOM, createElement } from "./react";

const vdom = (
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style={"color: blue"}>첫 번째 아이템</li>
      <li style={"color: green"}>두 번째 아이템</li>
      <li style={"color: purple"}>세 번째 아이템</li>
    </ul>
  </p>
);

document.querySelector("#root").appendChild(createDOM(vdom));
