/* @jsx createElement */
import { createDOM, createElement } from "./react";

function Title(props) {
  return <h1>{props.children}</h1>;
}

function Item(props) {
  return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const vdom = (
  <p>
    <Title>React 만들기</Title>
    <ul>
      <Item color="blue">첫 번째 아이템</Item>
      <Item color="green">두 번째 아이템</Item>
      <Item color="purple">세 번째 아이템</Item>
    </ul>
  </p>
);

document.querySelector("#root").appendChild(createDOM(vdom));
