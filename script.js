window.onload = function () {
  document.getElementById("left-fade").style.width = "0px";
  document.getElementById("right-fade").style.width = "0px";

  setTimeout(() => {
    document.getElementById("dot-nav").style.visibility = "visible";
  }, 800);
};