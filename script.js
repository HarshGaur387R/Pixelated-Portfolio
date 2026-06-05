var sidebarState;
var times = 0;
var id;
var current_image_index = 0;
var progressBarAnimated = false;


const imageElements = ["<img id=\"image\" src=\"images/serviceScreenImages/serviceBotResized.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:-1em; margin-top:40px;\">", "<img id=\"image\" src=\"images/serviceScreenImages/responsiveWebsite.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:0; margin-top:50px;\"></img>", "<img id=\"image\" src=\"images/serviceScreenImages/web3Service.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:-1em; margin-top:25px;\">"];

const serviceDescription = ["I can automate your workflow using agents.", "I can create digital platforms for your business", "i can implement Crypto payment solutions."];


const projectsLink = ['https://github.com/HarshGaur387R/Html-render-bot', 'https://github.com/HarshGaur387R/Remote-Computer-Monitor', 'https://github.com/HarshGaur387R/Panda-Police-Extension', 'https://github.com/HarshGaur387R/Ez-comment-out', ''];

window.addEventListener('load', (e) => {
    document.getElementById('loadingScreen').style.display = 'none';
});

let projectCards = Array(document.getElementsByClassName('projectCards'));
projectCards = Array.from(projectCards[0]);

projectCards.forEach((e, index) => {
    e.addEventListener('click', (ev) => {
        window.open(`${projectsLink[index]}`, '_blank');
    });
});

function slideDown() {
    document.getElementById("downIcon").style.display = "none";
    document.getElementById("upIcon").style.display = "initial";
    document.getElementById("listOfNavigation").style.display = "flex"
}

function slideUp() {
    document.getElementById("downIcon").style.display = "initial";
    document.getElementById("upIcon").style.display = "none";
    document.getElementById("listOfNavigation").style.display = "none"

}

function state() {

    var screen = document.querySelector(".myIntro");
    if (isInViewPort(screen) && times == 0) {
        times = 1;
        move();
    }

    // Animate progress bars when Framework section comes into view
    if (!progressBarAnimated) {
        var frameworkSections = document.querySelectorAll(".myIntro");
        var lastSection = frameworkSections[frameworkSections.length - 1];
        if (lastSection && isInViewPort(lastSection)) {
            progressBarAnimated = true;
            animateProgressBars(lastSection);
        }
    }

    closeSidebar();
}

function move() {

    let r = document.querySelector(':root');
    let meterTexts = document.querySelectorAll(".meterText");

    // Extract target values from meterText elements and initialize counters
    let targetValues = [];
    let currentValues = [];

    meterTexts.forEach((text, index) => {
        let targetPercent = parseInt(text.innerText);
        targetValues.push(targetPercent);
        currentValues.push(0);
        text.innerText = '0%';
    });

    let cssProps = ["--hpos", "--cpos", "--jpos", "--gopos", "--cppos", "--luapos"];
    id = setInterval(frame, 20);

    function frame() {
        let allDone = true;

        for (let i = 0; i < currentValues.length; i++) {
            if (currentValues[i] < targetValues[i]) {
                currentValues[i]++;
                meterTexts[i].innerText = currentValues[i] + '%';
                r.style.setProperty(cssProps[i], currentValues[i] + '%');
                allDone = false;
            }
        }

        if (allDone) {
            clearInterval(id);
        }
    }

}

function animateProgressBars(section) {
    const skillMeters = section.querySelectorAll(".skillMeter");
    const targetFills = [9, 8, 7, 9, 8, 10, 8, 7, 6]; // NextJs: 90%, Expo: 80%, Fyne Go: 70%

    skillMeters.forEach((meter, meterIndex) => {
        const progressBoxes = meter.querySelectorAll(".progressBox");
        const targetFill = targetFills[meterIndex];
        let currentFill = 0;

        const fillInterval = setInterval(() => {
            if (currentFill < targetFill) {
                progressBoxes[currentFill].style.backgroundColor = "yellow";
                currentFill++;
            } else {
                clearInterval(fillInterval);
            }
        }, 80);
    });
}

function isInViewPort(element) {

    let bounding = element.getBoundingClientRect();

    // Edit this part for just a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        return true;
    } else {
        return false;
    }
}

window.addEventListener('scroll', state, false);


document.getElementById("wrapper").addEventListener('click', () => {
    closeSidebar();
});


document.getElementById("nextButton").addEventListener('click', () => {

    ++current_image_index;

    if (current_image_index > 2) {
        current_image_index = 0;
    }

    document.getElementById("serviceImg").innerHTML = imageElements[current_image_index];
    document.getElementById("serviceDescription").innerHTML = serviceDescription[current_image_index];

});

document.getElementById("previousButton").addEventListener('click', () => {

    --current_image_index;

    if (current_image_index < 0) {
        current_image_index = 2;
    }

    document.getElementById("serviceImg").innerHTML = imageElements[current_image_index];
    document.getElementById("serviceDescription").innerHTML = serviceDescription[current_image_index];

});

const changeLocation = (link) => {
    window.location = `#${link}`;
}



document.getElementById('SubmitButton').addEventListener('click', sendMail);

async function sendMail() {
    window.location.href = "mailto:hgaur701@gmail.com"
}
