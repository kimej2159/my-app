$(function () {
    $("#regBt").click(function () {
      alert("회원가입 페이지로 이동합니다.");
      location.href = "./register.html";
    });
    $("#loginBt").click(function () {
      location.href = "./login.html";
    });
  });