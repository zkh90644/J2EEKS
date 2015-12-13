// 页面加载的函数，设置对应div_content的位置
function changeLeftOfContent(time) {
  // alert(time);
  var sidebarWidth = $('#z_div_sidebar').css("width");
  var contentWidth = $('#z_div_container').css("width");
  sidebarWidth = parseInt(sidebarWidth);
  contentWidth = parseInt(contentWidth);
  var windowWidth = parseInt($(window).width());
  // var contentMarginTop = $("#z_div_container").find('h2').offset().top;
  var contentMarginTop = 10;
  var changeWidth = windowWidth - sidebarWidth - contentWidth;
  // 设置动画数据
  if (changeWidth >= 0) {
    changeWidth /= 2;
    var left = sidebarWidth + changeWidth + contentMarginTop;
  }else {
    var left = sidebarWidth + contentMarginTop;
  }
  // 运行动画效果
  if (time == "move") {
    $('#z_div_container').animate({"left":left});
  }else {
    $('#z_div_container').css({"left":left});
  }
}

$(function () { $('#z_ul_cinema_set').collapse({toggle: false})});
$(function () { $('#z_ul_film_set').collapse({toggle: false})});

// 整个sidebar
var sidebar = $('#z_div_sidebar');
// 关闭按钮
var closelogo = $('#z_div_sidebar_close');
// 分割线
var hr = $('#z_div_sidebar').find('hr');
// 选择文字
var itemWords = $('.z_div_list_menu_item_message');
// 选择的logo
var itemImage = $('.z_div_list_menu_item_image');
// 二级菜单
var secondItem = $('.list-unstyled');
var secondLi = $('.list-unstyled li');
var secondMessage = $('.list-unstyled span');
var secondImage = $('.list-unstyled img');
var secondImage = $('.list-unstyled img');
var secondDiffLi = $('.z_img_secondLi');
// 个人信息
var selfMessage = $('#z_div_self_message');
// 菜单按钮
var menuListDiv =  $('#z_img_menu_list');
var menuListButton = menuListDiv.find('img');
// 登出按钮
var logoutMessage = $('#z_a_logout_button').find('span');
var logoutLogo = $('#z_a_logout_button').find('img');

  //点击后菜单栏左移
function hideSiderBar() {
  // 首先都变成透明
  closelogo.animate({"opacity":"0"});
  logoutMessage.animate({"opacity":"0"});
  selfMessage.animate({"opacity":"0"});
  hr.animate({"opacity":"0"});
  itemWords.animate({"opacity":"0"});
  itemImage.animate({"opacity":"0"},changeWidth);
  logoutLogo.animate({"opacity":"0"});

  secondItem.animate({"opacity":"0"});
  // 左移动作
  function changeWidth() {

    itemWords.css({"display":"none"});
    closelogo.css({"display":"none"});
    selfMessage.css({"display":"none"});
    itemImage.css({"width":"20px","height":"20px","margin":"0"});
    sidebar.animate({"width":"50px"},showImage);
    logoutMessage.css({"display":"none"});
    menuListDiv.css({"display":"block"});
    logoutLogo.parent().parent().css({"right":"15px"});

    secondItem.css({"background-size":"50px 64px"});
    secondMessage.each(function () {
      $(this).css({"display":"none"});
    });
    secondImage.each(function () {
      $(this).css({"display":"block"});
    });
    secondLi.each(function () {
      $(this).css({"paddingTop":"10px"});
    });
    secondDiffLi.each(function () {
      $(this).css({"paddingBottom":"10px"});
    });

  }

  function showImage() {
    menuListButton.animate({"opacity":"0.8"});
    itemImage.animate({"opacity":"1"});
    logoutLogo.animate({"opacity":"0.65"});

    secondItem.animate({"opacity":"1"});
    changeLeftOfContent("move");
  }

}

function showSiderBar() {
    menuListButton.animate({"opacity":"0"});
    itemImage.animate({"opacity":"0"});
    logoutLogo.animate({"opacity":"0"},changeWidth);

    secondItem.animate({"opacity":"0"});

    function changeWidth() {
      itemWords.css({"display":"inline"});
      closelogo.css({"display":"inline"});
      selfMessage.css({"display":"inline"});
      itemImage.css({"width":"9%","height":"9%","margin":"-3px 5px 0 5px"});
      logoutMessage.css({"display":"inline"});
      menuListDiv.css({"display":"none"});
      logoutLogo.parent().parent().css({"right":"5px"});
      sidebar.animate({"width":"200px"},showImage);


      secondItem.css({"background-size":"200px 80px"});
      secondMessage.each(function () {
        $(this).css({"display":"inline"});
      });
      secondImage.each(function () {
        $(this).css({"display":"none"});
      });
      secondLi.each(function () {
        $(this).css({"paddingTop":"0"});
      });
      secondDiffLi.each(function () {
        $(this).css({"paddingBottom":"0"});
      });

    }

    function showImage(argument) {
      closelogo.animate({"opacity":"1"});
      selfMessage.animate({"opacity":"1"});
      hr.animate({"opacity":"1"});
      itemWords.animate({"opacity":"1"});
      itemImage.animate({"opacity":"1"});
      logoutMessage.animate({"opacity":"0.65"});
      logoutLogo.animate({"opacity":"0.65"});
      secondItem.animate({"opacity":"1"});
      changeLeftOfContent("move");
    }
}
