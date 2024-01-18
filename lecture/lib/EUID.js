// createElement 함수
// DOM 노드 : HTMLElement 반환
export function createElement(type, props = {}, ...children){
  // type - DOM 요소 노드 생성
  const element = document.createElement(type); // "div", "caption"

  // for - in
  // for(const key in props){
    
  //   if(Object.hasOwnProperty.call(props, key)){
  //     const value = props[key];
  //     element.setAttribute(key, value);
  //   }
  // }
  // 문 ( statement )
  // for(const [key, value] of Object.entries(props)){
  //   element.setAttribute(key, value);
  // }
  // 식 ( expression )
  const keyValues = Object.entries(props);
  keyValues.forEach(([key, value]) => element.setAttribute(key, value));

  // props - 생성한 DOM 요소 노드에 속성 설정
  // ...children - 생성한 DOM 요소 노드의 자식으로 구성
  // 생성한 DOM 요소 노드 반환

  element.append(...children);

  return element;
}

// createRoot 함수
// 객체 : {render, unmount}
export function createRoot(domNode /* container */){

  // DOM에 렌더링 하는 함수
  const render = (element) => {
    domNode.append(element);
  }

  // DOM에 렌더링된 루트 요소를 제거
  const unmount = () => {
    domNode.firstElementChild.remove();
  }

  // 객체를 반환
  return {
    render,
    unmount,
  }
}

// EUID 객체의 멤버로 내보내기

const EUID = Object.freeze({
  createElement,
  createRoot,
})

export default EUID;