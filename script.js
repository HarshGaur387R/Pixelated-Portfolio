function closeSidebar() {
    document.getElementById("sidebar").style.translate = "-200px";
    document.getElementById("cross").style.transform = "translate(-200px)";
    document.getElementById("hamburger").style.transform = "translate(0px)";
    
}

function openSidebar(){
     document.getElementById("sidebar").style.translate = "0px";
     document.getElementById("cross").style.transform = "translate(0px)";
    document.getElementById("hamburger").style.transform = "translate(-200px)";
}