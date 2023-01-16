// 브라우저가 서버에 접속해서 네트워크 통신으로 static (html, css, image, javascript, video..) 파일을
// 사용자 Pc의 임시 인터넷 파일이라는 저장공간에 두고 수시로 참조(=Cache, 속도를 향상시키기 위함)
// p.472 참고
$(function () {
  // 짧은 버전

  // jquery 요소 선택
  var LI = $("li"); // $ : (모두) 찾아라~   () 안에 li 라는 태그 요소를!
  /* array vs collection
    array : 다양한 API 제공(배열을 다루는 메소드, 배열 프로퍼티)
    collection : arry처럼 인덱싱이나 값의 할당, 추출이 가능하지만 API가 없음
*/
  console.log("LI갯수 : " + LI.length);
  console.log("LI의 타입 :" + typeof LI);
  var p = $("p"); // 모든 p, p의 컬렉션(=집합)
  // dom : document object model --> html의 구조를 브라우저가 해석해서 문서객체 형태로 표현

  LI.mouseover(function () {
    // 마우스가 LI에 올려지면
    var target = $(this); // 클릭한 LI
    var index = target.index();
    $(this).children().stop().slideDown(); // 아래로 부드럽게 펼쳐지면서 display를 block 처리!
  });

  LI.mouseout(function () {
    // 올려졌던 마우스 LI에서 벗어나면
    var target = $(this); // 클릭한 LI
    var index = target.index(); // LI의 집합(=Collection)에서 클릭한 LI가 몇번째 인덱스를 갖는지 알려주는 메소드
    //console.log(target, index);
    $(this).children().stop().slideUp(); // 아래로 부드럽게 펼쳐지면서 display를 block 처리!
  });
  // 열기
  var openBt = $("#opener");
  var messageBox = $("#popup");
  var closeBt = $("#closer");

  openBt.click(function () {
    messageBox.show(); // display: block;
  });
  closeBt.click(function () {
    messageBox.hide(); // display: none;
  });
});
