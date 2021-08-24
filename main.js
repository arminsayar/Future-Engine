"use strict";

$("#voiceD").click(function menuOn() {
  $("section").css("display", "none");
  $("footer").css("display", "none");
  $("#textD").css("display", "none");
  $("body").addClass("vp-a");
  $('button[name="xb"]').removeClass("vpb-d");
  $('div[name="vptext"]').removeClass("vpt-d");
  $('div[name="vpmicro"]').removeClass("m-d");
  $('div[name="vpd-main"]').removeClass("vpd-d");
  $(".micl").css("display", "block");
});

$('button[name="xb"]').click(function menuOff() {
  $("section").css("display", "block");
  $("footer").css("display", "block");
  $("#textD").css("display", "block");
  $("body").removeClass("vp-a");
  $('button[name="xb"]').addClass("vpb-d");
  $('div[name="vptext"]').addClass("vpt-d");
  $('div[name="vpmicro"]').addClass("m-d");
  $('div[name="vpd-main"]').addClass("vpd-d");
  $(".micl").css("display", "none");
});

$('div[name="vpd-main"]').click(function () {
  if ($("body").hasClass("vp-a")) {
    $("section").css("display", "block");
    $("footer").css("display", "block");
    $("#textD").css("display", "block");
    $("body").removeClass("vp-a");
    $('button[name="xb"]').addClass("vpb-d");
    $('div[name="vptext"]').addClass("vpt-d");
    $('div[name="vpmicro"]').addClass("m-d");
    $('div[name="vpd-main"]').addClass("vpd-d");
    $(".micl").css("display", "none");
  }
});

let settingMenu = document.querySelector("#foot-ul");

$("#footerT7").click(function () {
  if (DDmenu.style.display == "block") {
    DDmenu.style.display = "none";
  }
  if (settingMenu.style.display == "block"){
      $("#foot-ul").css("display", "none");
  }
  else {
      settingMenu.style.display = "block";
  }
    
});

$("html").click(function () {
  $("#foot-ul").css("display", "none");
});

$("#footerT7, .foot-li").click(function (event) {
  event.stopPropagation();
});

// ----drop-down-menu----

let appID = document.querySelector("#appID");
let DDmenu = document.querySelector(".drop-down-menu");
let iconrow = document.querySelector(".row");
let applist = document.querySelector(".applist");

$("#appID").click(function () {
  if (DDmenu.style.display == "block") {
    DDmenu.style.display = "none";
  } else {
    $(".drop-down-menu").css("display", "block");
    DDmenu.scrollTop = "0px";
  }
});

$(document).click(function (event) {
  if (
    !$(event.target).closest(appID).length &&
    !$(event.target).closest(DDmenu).length
  ) {
    DDmenu.style.display = "none";
  }
});

//----Arts and Culture----
let iconarts = document.querySelector(".arts");
let longcaption = document.querySelector(".long");
let hovercaption = document.querySelector(".hovercaption");

iconarts.addEventListener("mouseover", showtext);
iconarts.addEventListener("mouseleave", hidetext);
function showtext() {
  longcaption.style.whiteSpace = "unset";
}
//hovercaption.style.display="block";

function hidetext() {
  longcaption.style.whiteSpace = "nowrap";
}
