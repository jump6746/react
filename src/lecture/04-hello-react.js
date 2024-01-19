import { createElement as h /* hyperScript */ } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// React.createElement
// ReactDom.createRoot

const strongElement = h("strong", {}, "fundamental");

const h1Element = h(
  "h1",
  {},
  "안녕!",
  h("br"),
  "리액트."
);

const pElement = h(
  "p",
  {},
  "리액트는 UI 구축을 위한 자바스크립트 라이브러리입니다."
);

const appElement = h(
  "div",
  {id: "app"},
  strongElement,
  h1Element,
  pElement,
);

const reactDomRoot = createRoot(
  document.getElementById("root")
);

reactDomRoot.render(appElement);

// .getOutReact__button 버튼 클릭 이벤트 핸들링

document.querySelector(".getOutReact__button")
  .addEventListener("click", () => {
    // 리액트 나가~ 
    reactDomRoot.unmount();
  })