/***************
 * 网站的翻转功能
 **************/

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));

/*******************
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
