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

  function changeWidth() {

    itemWords.css({"display":"none"});
    closelogo.css({"display":"none"});
    selfMessage.css({"display":"none"});
    itemImage.css({"width":"20px","height":"20px","margin":"0"});
    sidebar.animate({"width":"50px"},showImage);
    logoutMessage.css({"display":"none"});
    menuListDiv.css({"display":"block"});
    logoutLogo.parent().parent().css({"right":"15px"});
  }

  function showImage() {
    menuListButton.animate({"opacity":"0.8"});
    itemImage.animate({"opacity":"1"});
    logoutLogo.animate({"opacity":"0.65"});
  }

}

function showSiderBar() {
    menuListButton.animate({"opacity":"0"});
    itemImage.animate({"opacity":"0"});
    logoutLogo.animate({"opacity":"0"},changeWidth);

    function changeWidth() {
      itemWords.css({"display":"inline"});
      closelogo.css({"display":"inline"});
      selfMessage.css({"display":"inline"});
      itemImage.css({"width":"9%","height":"9%","margin":"-3px 5px 0 5px"});
      logoutMessage.css({"display":"inline"});
      menuListDiv.css({"display":"none"});
      logoutLogo.parent().parent().css({"right":"5px"});
      sidebar.animate({"width":"200px"},showImage);
    }

    function showImage(argument) {
      closelogo.animate({"opacity":"1"});
      selfMessage.animate({"opacity":"1"});
      hr.animate({"opacity":"1"});
      itemWords.animate({"opacity":"1"});
      itemImage.animate({"opacity":"1"});
      logoutMessage.animate({"opacity":"0.65"});
      logoutLogo.animate({"opacity":"0.65"});
    }
}
