/***************
 * 网站的翻转功能
 **************/

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));

/****************
 * js手风琴特效
 ***************/
window.onload = function () {
  //容器对象
  var box = document.getElementById("container");
  var slides = box.getElementsByClassName("slide");
  var slideWidth = slides[0].offsetWidth;
  var countWidth = slides[0].getElementsByTagName("span")[0].offsetWidth;

  //容器一些样式配置
  var exposeWidth = 80;
  var borderColorOpacity = "rgba(255,255,255,0.5)";
  var borderColorWhite = "#CE8349";
  var exposeScale = "1.2";
  var currentScale = "1.6";

  // 设置容器宽度
  var boxWidth = slideWidth + (slides.length - 1) * exposeWidth;
  box.style.width = boxWidth + "px";

  // 设置每个滑块的初始样式
  function setSlidePos() {
    for (var i = 1; i < slides.length; i++) {
      slides[i].style.left = slideWidth + exposeWidth * (i - 1) + "px";
    }
    for (var i = 0; i < slides.length; i++) {
      var spanDistance, spanScale, spanColor;
      if (i < 1) {
        spanDistance = (slideWidth - countWidth) / 2 + "px";
        spanScale = currentScale;
        spanColor = borderColorWhite;
      } else {
        spanDistance = (exposeWidth - countWidth) / 2 + "px";
        spanScale = exposeScale;
        spanColor = borderColorOpacity;
      }
      slides[i].getElementsByTagName("span")[0].style.left = spanDistance;
      slides[i].getElementsByTagName("span")[0].style.transform =
        "scale(" + spanScale + ")";
      slides[i].getElementsByTagName("span")[0].style.borderColor =
        "" + spanColor + "";
    }
  }
  setSlidePos();

  // 移动距离
  var translate = slideWidth - exposeWidth;

  // 为每个滑块绑定事件
  for (var i = 0; i < slides.length; i++) {
    (function (i) {
      slides[i].onmouseover = function () {
        setSlidePos();
        for (var j = 1; j <= i; j++) {
          var exposeSpan = slides[j - 1].getElementsByTagName("span")[0];
          slides[j].style.left =
            parseInt(slides[j].style.left, 10) - translate + "px";
          exposeSpan.style.left = (exposeWidth - countWidth) / 2 + "px";
          exposeSpan.style.transform = "scale(" + exposeScale + ")";
          exposeSpan.style.borderColor = borderColorOpacity;
        }
        var currentSpan = slides[i].getElementsByTagName("span")[0];
        currentSpan.style.left = (slideWidth - countWidth) / 2 + "px";
        currentSpan.style.transform = "scale(" + currentScale + ")";
        currentSpan.style.borderColor = borderColorWhite;
      };
    })(i);
  }
};

/******************
 * 原生js二级下拉菜单
 *******************/
let div = document.querySelector(".NAV");
let Lis = div.children;
console.log(div, Lis);
for (let i = 0; i < Lis.length; i++) {
  // 鼠标经过，出现下拉菜单
  Lis[i].onmouseover = function () {
    this.children[1].style.display = "block";
  };
  // 鼠标离开，隐藏下拉菜单
  Lis[i].onmouseout = function () {
    this.children[1].style.display = "none";
  };
}
