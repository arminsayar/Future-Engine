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
