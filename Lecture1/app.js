function createH1(props) {
  return [document.createElement("h1")].map((element) => {
    Object.entries({ ...props, "data-id": "subject" }).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
    return element;
  })[0];
}

function createDiv(props) {
  return [document.createElement("div")].map((element) => {
    Object.entries({ ...props, "data-id": "layout" }).forEach(([name, value]) =>
      element.setAttribute(name, value)
    );
    return element;
  })[0];
}

const creatorMap = {
  h1: createH1,
  div: createDiv,
};

const coupler = (map) => (type, props) => map[type](props);
const createElement = coupler(creatorMap);
