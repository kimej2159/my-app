"use strict";

// var 대신 let(=변수) 또는 const (=상수)
// 왼쪽버튼을 DOM 에서 찾아서 left 라는 변수에 담아보자!
const left = document.querySelector(".left"); // 왼쪽 버튼
const right = document.querySelector(".right"); // 왼쪽 버튼
const images = document.querySelectorAll(".slides > img"); // 사진 각각
const slides = document.querySelector(".slides"); // 사진 4장을 담는 div
const buttons = document.querySelectorAll(".btns > li");

const slideWidth = 1000;
let slideNumber = 1;
/*     [처음]                  [이동위치 : 왼쪽이동은 -X 방향]
1번사진 : 0     = 0 x -1000    0  
2번사진 : 1000  = 1 x -1000    -1000
3번사진 : 2000  = 2 x -1000    -2000
4번사진 : 3000  = 3 x -1000    -3000
*/
// 왼쪽버튼에 클릭 이벤트를 추가해보자!
left.addEventListener("click", function () {
  // 일반 함수 표기법
  if (slideNumber < images.length) {
    slides.style.transform = `translate(-${slideWidth * slideNumber}px)`; // 템플릿 문법
    slideNumber++;
  } else {
    slideNumber = 1;
    slides.style.transform = `translate(-${slideWidth * (slideNumber - 1)}px)`; // 템플릿 문법
  }
});

// 오른쪽버튼에 클릭 이벤트를 추가해보자!
right.addEventListener("click", function () {
  if (slideNumber >= 1) {
    slides.style.transform = `translate(-${slideWidth * (slideNumber - 1)}px)`; // 템플릿 문법
    slideNumber--;
  } else {
    slideNumber = images.length - 1;
    slides.style.transform = `translate(-${slideWidth * slideNumber}px)`; // 템플릿 문법
  }
});

/*
left.addEventListener("click", () => { // arrow function : 화살표 함수 표기법
    
});
*/

buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    resetBtns();
    this.classList.add("active"); // .cliassList : 클래스속성 프로퍼티 , .add() : 추가 메소드
    slides.style.transform = `translate(-${slideWidth * index}px)`; // 템플릿 문법
  });
});

function resetBtns() {
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });
}
