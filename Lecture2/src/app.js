import { createDOM } from "./react";

const vdom = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {
        style: "color: red",
      },
      children: ["React 만들기"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {
            style: "color: blue",
          },
          children: ["첫번째 아이템"],
        },
        {
          tag: "li",
          props: {
            style: "color: green",
          },
          children: ["두번째 아이템"],
        },
        {
          tag: "li",
          props: {
            style: "color: purple",
          },
          children: ["세번째 아이템"],
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDOM(vdom));

