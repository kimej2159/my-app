// 연산자 : 사칙연산~ java의 그것과 (거의)같음
// +,-,*,/,%, **
// console.log(Math.pow(5,2));
console.log(5**2);

// 문자열 연결연산자 : +
console.log("가나다"+123);

let num1 = 10;
num1++; // 후위 증감 연산자
console.log("num1 : "+num1);
++num1; // 전위 증감 연산자
console.log("num1 : "+num1);
let num2 = num1++; // 대입 먼저하고, 나중에 num1을 1증가
console.log("num2 : "+num2);
console.log("num1 : "+num1);
num2 = ++num1; // 대입 증가하고, 나중에 num2에 대입
console.log("num2 : "+num2);
console.log("num1 : "+num1);

// 대입, 복합대입 연산자  
// = , +=, -=, *=, /* ...
// a += 1; <--> a = a+1 과 같음.

// 비교연산자 : true, false
// >, >=, : Ligature Font 설치하면 
// <, <=   :   
// == : value만 일치할때   true
// === : data type, value 모두 일치할때 (= 3개)  true
// != : 같지 않다

// 논리 연산자 : and , or , not
//               && , || , !

// 삼항 조건 연산자 : 조건 ? 참일때: 거짓일때;

