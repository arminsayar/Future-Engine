let appID = document.querySelector("#appID");
let DDmenu =document.querySelector(".drop-down-menu");
let iconrow =document.querySelector(".row");
let applist = document.querySelector(".applist");
appID.addEventListener("click" ,toggleMenu);
//document.addEventListener("click" , hidemenu);


function toggleMenu () {
    DDmenu.style.display = "flex";
}
//to check what the user is interacting with elements inside the div or not 
window.addEventListener('mouseup' , function(event) {
    if (event.target != DDmenu && event.target.parentNode != applist) 
     {
        DDmenu.style.display = "none";
 }
})

// function hidemenu() {
//     //Hide the launcher if visible
//     DDmenu.style.display="none";
//     DDmenu.classList.add("hide");
//     };
    
//     // Prevent hiding on click inside app launcher
//     DDmenu.click(function(event){
//         event.stopPropagation();
//     });