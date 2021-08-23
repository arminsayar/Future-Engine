
'use strict'

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

$("#footerT7").click(function () {
    $('#foot-ul').css("display", "block");
});

$('html').click(function () {
    $('#foot-ul').css("display", "none");
})

$('#footerT7, .foot-li').click(function (event) {
    event.stopPropagation();
});


// ----drop-down-menu----

let appID = document.querySelector("#appID");
let DDmenu = document.querySelector(".drop-down-menu");
let iconrow = document.querySelector(".row");
let applist = document.querySelector(".applist");

$("#appID").click(function () {
    $(".drop-down-menu").css("display", "block");
});

$("html").click(function () {
    $(".drop-down-menu").css("display", "none");
});

$("#appID, .icon, .drop-down-menu, .icon1, .more-button, .more").click(function (e) {
    e.stopPropagation();
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
