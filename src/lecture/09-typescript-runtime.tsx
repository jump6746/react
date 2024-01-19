// React, ReactDOM

// @ts-ignore
// @ts-nocheck

const { createRoot } = ReactDOM;

const createApp = ():string => {
  return (
    <div id="app">
      <h1>안녕!<br /> 리액트</h1>
      <p>리액트는 오픈 소스 자바스크립트 라이브러리입니다.</p>
    </div>
  );
};

console.log(createRoot);

const rootElement = document.getElementById("root") as HTMLDivElement;

const root = createRoot(rootElement);

root.render(
  createApp()
);