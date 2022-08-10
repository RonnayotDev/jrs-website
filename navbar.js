const NavbarToggle = document.querySelectorAll(".navbar,.ham-burger");

loadEventListener();

function loadEventListener(){
    for(i = 0;i<NavbarToggle.length;i++){
        NavbarToggle[i].addEventListener("click",function(){
            this.classList.toggle("active");
        })
    }
}