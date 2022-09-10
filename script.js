var sidebarState;
var times = 0;
var id;
var current_image_index=0;

const imageElements =["<img id=\"image\" src=\"images/serviceScreenImages/serviceBotResized.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:-1em; margin-top:40px;\">" , "<img id=\"image\" src=\"images/serviceScreenImages/responsiveWebsite.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:0; margin-top:50px;\"></img>" , "<img id=\"image\" src=\"images/serviceScreenImages/web3Service.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:-1em; margin-top:25px;\">"];

const serviceDescription=["I can create Discord bot for you.", "I can create responsive website for you.","Service will be available soon."];

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


document.getElementById("nextButton").addEventListener('click',()=>{
   
   ++current_image_index;

   if(current_image_index > 2){
      current_image_index = 0;
   }

   document.getElementById("serviceImg").innerHTML = imageElements[current_image_index];
   document.getElementById("serviceDescription").innerHTML = serviceDescription[current_image_index];

});

document.getElementById("previousButton").addEventListener('click',()=>{

    --current_image_index;

    if(current_image_index < 0){
        current_image_index = 2;
    }

   document.getElementById("serviceImg").innerHTML = imageElements[current_image_index];
   document.getElementById("serviceDescription").innerHTML = serviceDescription[current_image_index];

});

const changeLocation = (link)=>{
    window.location = `#${link}`;
}
