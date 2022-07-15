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

/*****************
 * jQuery轮播图特效
 *****************/

// 设定当前位置
var pos = 0;
// 获取滑块长度
var totalSlides = $("#slider-wrap ul li").length;
// 获取滑块宽度
var sliderWidth = $("#slider-wrap").width();

$(document).ready(function () {
  /*****************
	 滑块设置
	*****************/
  // 设置滑块的X轴宽度
  $("#slider-wrap ul#slider").width(sliderWidth * totalSlides);

  // 轮播图右侧的“切换上一张”按钮
  $("#next").click(function () {
    slideRight();
  });

  // 轮播图左侧的“切换下一张”按钮
  $("#previous").click(function () {
    slideLeft();
  });

  // 自动轮播
  var autoSlider = setInterval(slideRight, 3000);

  $.each($("#slider-wrap ul li"), function () {
    // 设置一个颜色
    var c = $(this).attr("data-color");
    $(this).css("background", c);

    // 创建分页
    var li = document.createElement("li");
    $("#pagination-wrap ul").append(li);
  });

  // 计数器函数
  countSlides();

  // 分页函数
  pagination();

  // 鼠标悬停后显示或隐藏按钮
  // 鼠标悬停后自动停止切换图片
  $("#slider-wrap").hover(
    function () {
      $(this).addClass("active");
      clearInterval(autoSlider);
    },
    function () {
      $(this).removeClass("active");
      autoSlider = setInterval(slideRight, 3000);
    }
  );
});

/******************
 左侧“切换上一张”按钮
*******************/
function slideLeft() {
  pos--;
  if (pos == -1) {
    pos = totalSlides - 1;
  }
  $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

  countSlides();
  pagination();
}

/******************
 右侧“切换下一张”按钮
*******************/
function slideRight() {
  pos++;
  if (pos == totalSlides) {
    pos = 0;
  }
  $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

  countSlides();
  pagination();
}

function countSlides() {
  $("#counter").html(pos + 1 + " / " + totalSlides);
}

function pagination() {
  $("#pagination-wrap ul li").removeClass("active");
  $("#pagination-wrap ul li:eq(" + pos + ")").addClass("active");
}
