// 변수 : 데이터를 담는 그릇, 메모리상 데이터 저장 공간

// 1. 선언 키워드
// var 변수명 = 변수값; // 변수 선언 및 초기화 (오래된 방식)
var myName = "선영훈"; // String
var myScore = 100; // Number
// let, const 외에 여전히 var 사용가능하지만 사용하지 않도록 하는게 좋다.
// 단점) 변수 선언 전 사용가능, 중복 선언 가능, 변수의 유효범위(Score)에 영향을 받지 않음. <--> let,const

// ES5 (ECMA Script5) 부터 let, const(=상수) 키워드 사용가능
// 맨 첫줄에  "use strict"; 한줄을 추가하는게 좋다 (모던 자바스크립트 문법)
// "use strict"를 사용하는 ES5 문법에서는 임시 전역 변수가 생길수 있음..var 때문..ㅠ
let yourName = "seon yeong hun";
let yourScore = 100;
const PI = 3.141592; // 파이 --> 어디서든 3.14~

// 출력 
// 네이밍 : my_name [kebab-case]    or    myName [camel-case]
// 자바스크립트는 - (하이픈)으로 식별자를 네이밍하지 않음(권장)
console.log(myName);
console.log(myScore);
console.log(yourName);
console.log(yourScore);
console.log(PI);
