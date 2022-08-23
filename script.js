var sidebarState;
var times = 0;
var id;

function closeSidebar() {
    document.getElementById("sidebar").style.transform = "translate(-200px)";
    document.getElementById("cross").style.transform = "translate(-200px)";
    document.getElementById("hamburger").style.transform = "translate(0px)";

}

function openSidebar() {
    document.getElementById("sidebar").style.transform = "translate(0px)";
    document.getElementById("cross").style.transform = "translate(0px)";
    document.getElementById("hamburger").style.transform = "translate(-200px)";
}

function state() {

    var screen = document.getElementById("CSStext");
    if (isInViewPort(screen) && times == 0) {
        times = 1;
        move();
    }
    else if(isInViewPort(screen) && times == 1){
        clearInterval(id);
        move();
        
    }

    closeSidebar();
}

function move() {

    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    
    let HTMLelement = document.getElementById("HTMLtext");
    let CSSelement = document.getElementById("CSStext");
    let JSelement = document.getElementById("JStext");

    let counter = 0;
    let width = 0;

    id = setInterval(frame, 20);
    
    function frame() {
        if (width == 100) {
            clearInterval(id);
        }
        else {
            width++;
            counter++;

            if(width<=95){
            HTMLelement.innerText = counter + '%';
            r.style.setProperty("--hpos", width + '%');
            }
            if(width<=80){
            CSSelement.innerText = counter +'%';
            r.style.setProperty("--cpos",width+'%');
            }
            if(width<=90){
            JSelement.innerText = counter + '%';
            r.style.setProperty("--jpos",width+'%');
            }
        }

    }

}

function isInViewPort(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();

    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        // console.log('In the viewport! :)');
        return true;
    } else {
        // console.log('Not in the viewport. :(');
        return false;
    }
}

window.addEventListener('scroll', state, false);


document.getElementById("wrapper").addEventListener('click',()=>{
    closeSidebar();
});