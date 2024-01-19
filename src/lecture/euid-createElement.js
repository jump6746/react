

// 나도 리액트 처럼!!

function createElement(type, props, ...children){
  return { $$typeof: Symbol("euid.element"), type, props: {...props, children}};
}

// 리액트 요소 === 객체 -> { $$typeof: "Symbol(euid.element)", type, props: { children } }

const myElement = createElement("div", {id: "app", "data-type": "HTMLDivElement"},
  createElement("span", {}, "Hello React")
);

console.log(myElement);