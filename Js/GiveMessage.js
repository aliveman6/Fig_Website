/*************
 * 网站的翻转功能
 **************/
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));

/*************
 * 获取留言时间
 ************/
setInterval(function () {
  document.getElementById("time").innerHTML = new Date().toLocaleString();
}, 1000);

/*************
 * 表单输入验证
 ************/
function beforeSubmit(form) {
  if (form.username.value == "") {
    alert("您的昵称不能为空！");
    form.username.focus();
    return false;
  } else if (form.tel.value == "") {
    alert("电话号码不能为空！");
    form.password.focus();
    return false;
  } else if (form.tel.value.length < 11) {
    alert("电话号码至少为11位，请重新输入！");
    form.password.focus();
    return false;
  } else if (form.email.value == "") {
    alert("您的QQ邮箱不能为空！！！！！");
    form.email.focus();
    return false;
  } else if (form.textarea.value == "") {
    alert("您的留言内容为空！！！");
    return false;
  } else {
    return true;
  }
}

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
