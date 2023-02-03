$(function () {
  var headerSearch = $(".input-wrap__input");
  var keyword = $(".input-wrap__keyword-wrap");
  var keywordClose = $(".keyword-close__button");
  var hamburger = $(".gnb__top-hamburger");
  var hamburgerMenu = $(".gnb__top-hamburger-menu");
  var home = $(".bottom-menu__item-link--home");
  var dropMenu = $(".bottom-menu__dropmenu");

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
});
