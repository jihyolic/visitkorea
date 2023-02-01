$(function () {
  var gnbBarPc = $(".gnb__bar--pc");
  var gnbBarMo = $(".gnb__bar--mo");
  var topMenu = $(".top-menu");

  gnbBarPc.click(function () {
    topMenu.toggleClass("active");
  });
  gnbBarMo.click(function () {
    topMenu.toggleClass("active");
  });
}); // 추후 자스로 수정해보기
