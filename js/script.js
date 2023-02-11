$(function () {
  var headerSearch = $(".input-wrap__input");
  var keyword = $(".input-wrap__keyword-wrap");
  var keywordClose = $(".keyword-close__button");
  var hamburger = $(".gnb__top-hamburger");
  var hamburgerMenu = $(".gnb__top-hamburger-menu");
  var home = $(".bottom-menu__item--home");
  var dropMenu = $(".bottom-menu__dropmenu");
  var hamburgerClosed = $(".hamburger-closed");
  var header = $(".gnb__top");
  var tabButton = $(".tabs__tab");
  var tabPanel = $(".tabs__tab-panel");
  var tabDesc = $(".tabs__tab-desc");
  var moreButton = $(".tabs__tab-more");

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

  // section1

  tabPanel.hide();
  tabPanel.eq(0).show();
  tabDesc.hide();
  tabDesc.eq(0).show();
  moreButton.hide();
  moreButton.eq(0).show();

  tabButton.click(function () {
    var idx = $(this).index();
    tabPanel.hide();
    tabPanel.eq(idx).show();
    tabDesc.hide();
    tabDesc.eq(idx).show();
    tabButton.children(tabDesc).removeClass("active");
    $(this).children(tabDesc).addClass("active");
    moreButton.hide();
    moreButton.eq(idx).show();
  });
});
