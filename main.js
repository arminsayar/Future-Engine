
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

let appID = document.querySelector("#appID");
let DDmenu =document.querySelector(".drop-down-menu");
let iconrow =document.querySelector(".row");
let applist = document.querySelector(".applist");
// appID.addEventListener("click" ,toggleMenu);

//document.addEventListener("click" , hidemenu);


// function toggleMenu () {
//     DDmenu.style.display = "flex";
// }


//to check what the user is interacting with elements inside the div or not 
// window.addEventListener('mouseup' , function(event) {
//     if (event.target != DDmenu && event.target.parentNode != applist) 
//      {
//         DDmenu.style.display = "none";
//  }
// })

// function hidemenu() {
//     //Hide the launcher if visible
//     DDmenu.style.display="none";
//     DDmenu.classList.add("hide");
//     };
    
//     // Prevent hiding on click inside app launcher
//     DDmenu.click(function(event){
//         event.stopPropagation();
//     });

$("#appID").click(function(){
    $(".drop-down-menu").css("display", "block");
});

$("html").click(function(){
    $(".drop-down-menu").css("display", "none");
});

$("#appID, .icon, .drop-down-menu").click(function(e){
    e.stopPropagation();
});