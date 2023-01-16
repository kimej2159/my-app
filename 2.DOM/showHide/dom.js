// 웹브라우저에 내장된 자바스크립트 해석엔진이 해석한 HTML 구조
// Document Object Model(ing) : 문서 객체 모델

/*  1. dom 선택방법
    1.1 오랫동안 사용한 방법 
    document.getElementById(); -- id 선택자
    document.getElementsByClassName(); -- class 선택자
    document.getElementByName() -- form name 선택
    ...

    1.2 최근 사용하는 방법 : CSS 선택자처럼!!!
    document.querySelector();   // 일치하는 1개
    document.querySelectorAll(); // 모두(collection-->array like)
*/

// const h1 = document.getElementById("title");
// const h1 = document.getElementByTagname("h1");
// const h1 = document.getElementByClassname("item");

// const h1 = document.querySelector(".title"); //class
// const h1 = document.querySelector("h1"); // tag
// console.log(h1.textContent);
// h1.innerHTML = '<a href="#">DOM 조작완료</a>';
// h1.classList.add("gold_bg");

window.onload = function(){
// DOM 요소 선택
const h1 = document.querySelector("#title"); // id
const showBt = document.querySelector("#show");
const hideBt = document.querySelector("#hide");

// DOM 요소에 이벤트(event) 추가
// 이벤트 : 마우스나 키보드의 조작이 발생하면 , event 라고 함

// showBt 클릭하면 h1의 스타일을 block 으로 조작해
showBt.addEventListener("click", function () {
  h1.style.display = "block";
});

hideBt.addEventListener("click", function () {
  h1.style.display = "none";
});

}