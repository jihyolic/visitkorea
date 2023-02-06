$(function () {
  var headerSearch = $(".input-wrap__input");
  var keyword = $(".input-wrap__keyword-wrap");
  var keywordClose = $(".keyword-close__button");
  var hamburger = $(".gnb__top-hamburger");
  var hamburgerMenu = $(".gnb__top-hamburger-menu");
  var home = $(".bottom-menu__item--home");
  var dropMenu = $(".bottom-menu__dropmenu");
  var hamburgerClosed = $(".hamburger--closed");
  var header = $(".gnb__top");

  // 헤더 영역

  headerSearch.click(function () {
    keyword.show();
    $(this).addClass("active");
  });

  keywordClose.click(function () {
    keyword.hide();
    headerSearch.removeClass("active");
  });

  hamburger.click(function () {
    hamburgerMenu.toggleClass("active");
  });

  home.mouseenter(function () {
    dropMenu.show();
  });
  home.mouseleave(function () {
    dropMenu.hide();
  });

  hamburgerClosed.click(function () {
    hamburgerMenu.removeClass("active");
  });

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 0) {
  //     header.fadeOut();
  //   }
  // });
});
