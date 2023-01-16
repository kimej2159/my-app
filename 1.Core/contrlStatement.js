// 제어문 : 조건문, 반복문, 선택문(=분기문)

// if : 조건에 맞아야 실행, if else : 조건에 따라 실행 or 중지, if else if : 조건이 여러개 ~
let num1 = 30;
let num2 = 20;
if (num1 > num2) {
  // 단순 if문 - 조건이 false 일때는 처리안함.
  console.log(`${num1}은 ${num2} 보다 크다`);
} else {
  console.log(`${num1}은 ${num2} 보다 크지않다`);
}

// 삼항 조건 연산자 : ?
num1 > num2
  ? console.log(`${num1}은 ${num2} 보다 크다`)
  : console.log(`${num1}은 ${num2} 보다 크지않다`);

let choice = 1; // 1~3중에 하나를 선택한다

switch (choice) {
  case 1:
    "1을 선택하였습니다";
    break;
  case 2:
    "2를 선택했습니다";
    break;
  case 3:
    "3을 선택했습니다";
    break;
  default:
    "1~3중 하나만 선택해야합니다";
}

// boolean : true, false
//

// switch ~ case

// for, for~of(=배열), for ~ in(객체)
const users = {
  // (멤버)변수
  // key : value
  blood: "A",
  city: "Gwangju",
  gender: "Male",
  info: function () {
    // 메소드(=멤버 함수)
    console.log(
      `혈액형은 ${this.blood}이고 태어난 곳은 ${this.city}이고 성별은 ${this.male} 입니다`
    ); // 템플릿 문법(Template)
  },
};

for (let key in users) {
  console.log(`${key} : ${users[key]}`);
}
// while
// do ~ while
// break : 반복중지 , continue : 반복 건너뜀
