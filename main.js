'use strict'

$("#voiceD").click(function () {
    $("section").css("display", "none");
    $("footer").css("display", "none");
    $("#textD").css("display", "none");
    $("body").addClass("vp-a");
    $('button[name="xb"]').removeClass("vpb-d");
    $('div[name="vpd-main"]').removeClass("vpd-d");
});
$('button[name="xb"]').click(function () {
    $("section").css("display", "block");
    $("footer").css("display", "block");
    $("#textD").css("display", "block");
    $("body").removeClass("vp-a");
    $('button[name="xb"]').addClass("vpb-d");
    $('div[name="vpd-main"]').addClass("vpd-d");
})