/***************
 * 网站的翻转功能
 **************/
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));

/********************
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

/***********************
 * jQuery分步显示滚动特效
 ***********************/
(function ($) {
  $(function () {
    //设置顶部相对于文档的偏移坐标
    var wrapper_top = $(".progress .wrapper").offset().top;
    $(window).scroll(function () {
      //设置第一个元素的高度
      var wrapper_height = $(".progress .wrapper").height();
      //设置所有元素的垂直滚动条位置
      var top = $(this).scrollTop();
      if (top > wrapper_top - 10) {
        $(".progress .wrapper").addClass("affix");
      } else {
        $(".progress .wrapper").removeClass("affix");
      }
      //遍历所有的div元素
      $(".content div").each(function (i) {
        var this_top = $(this).offset().top;
        var height = $(this).height();
        var this_bottom = this_top + height;
        var percent = 0;
        if (top >= this_top && top <= this_bottom) {
          //设置进度条的运行规则
          percent = ((top - this_top) / (height - wrapper_height)) * 100;
          if (percent >= 100) {
            percent = 100;
            //使相对应的进度条以特定的样式去运动
            $(".progress .wrapper .bar:eq(" + i + ") i").css(
              "color",
              "#000000"
            );
          } else {
            $(".progress .wrapper .bar:eq(" + i + ") i").css(
              "color",
              "#f60fe6"
            );
          }
        } else if (top > this_bottom) {
          percent = 100;
          $(".progress .wrapper .bar:eq(" + i + ") i").css("color", "#000000");
        }
        $(".progress .wrapper .bar:eq(" + i + ") span").css(
          "width",
          percent + "%"
        );
      });
    });
    $(".wrapper .bar a").click(function (e) {
      e.preventDefault();
      var hash = this.hash.substr(1);
      $("html, body").animate(
        { scrollTop: $("#" + hash).offset().top - 10 },
        500
      );
    });
  });
})(jQuery);
