var sidebarState;
var times = 0;
var id;
var current_image_index = 0;


const imageElements = ["<img id=\"image\" src=\"images/serviceScreenImages/serviceBotResized.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:-1em; margin-top:40px;\">", "<img id=\"image\" src=\"images/serviceScreenImages/responsiveWebsite.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:0; margin-top:50px;\"></img>", "<img id=\"image\" src=\"images/serviceScreenImages/web3Service.gif\" alt=\"\" style=\"width:30%; max-width: 15em; min-width: 10em; margin-left:-1em; margin-top:25px;\">"];

const serviceDescription = ["I can create Discord bot for you.", "I can create responsive website for you.", "Service will be available soon."];

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
    else if (isInViewPort(screen) && times == 1) {
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

            if (width <= 95) {
                HTMLelement.innerText = counter + '%';
                r.style.setProperty("--hpos", width + '%');
            }
            if (width <= 80) {
                CSSelement.innerText = counter + '%';
                r.style.setProperty("--cpos", width + '%');
            }
            if (width <= 90) {
                JSelement.innerText = counter + '%';
                r.style.setProperty("--jpos", width + '%');
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


function formValidation() {

    let name = "";
    name = document.getElementById("ni").value;

    let email = "";
    email = document.getElementById("ei").value;

    let message = document.getElementById("ms").value;
    let captchaInput = document.getElementById("captchaInput").value;

    document.getElementById("captchaError").innerHTML = "";
    document.getElementById("emailErrorLabel").innerHTML = "";
    document.getElementById("nameErrorLabel").innerHTML = "";

    let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let numbers = /[1234567890]/;

    if (name == "") {
        document.getElementById("nameErrorLabel").innerHTML = "!! Empty Name"
        return false;
    }

    else if (format.test(name) || numbers.test(name)) {
        document.getElementById("nameErrorLabel").innerHTML = "!! Use Only Alphabets";
        return false;
    }

    else if (email == "") {
        document.getElementById("emailErrorLabel").innerHTML = "!! Empty Email";
        return false;
    }

    else if (email.indexOf('@') <= 0 || email.indexOf('.') <= 0) {
        document.getElementById("emailErrorLabel").innerHTML = "!! Wrong Email";
        return false;
    }

    else if (email.slice(email.lastIndexOf('.'), email.length).length - 1 < 2 || email.slice(email.lastIndexOf('.'), email.length).length - 1 > 3) {
        document.getElementById("emailErrorLabel").innerHTML = "!! Wrong Email";
        return false;
    }

    else if (captchaInput == "" || captchaInput != emptyArr.join('')) {
        document.getElementById("captchaError").innerHTML = "Invalid Captcha !"
        // console.log(emptyArr.join('')," : ",captchaInput);
        return false;
    }
    else {
        return true;
    }

};


document.getElementById('SubmitButton').addEventListener('click', sendMail);

document.getElementById('clsBtn').addEventListener('click', () => { document.getElementById('popUp').style.display = "none" });

function popupFunction(message) {
    let popUp = document.getElementById('popUp');

    console.log(message);
    if (message == "OK") {
        popUp.style.display = "initial";
    }
    else {
        popUp.style.backgroundColor = "red";
        document.getElementById('popUpMessage').innerHTML = "Error Mail Not Sent !"
        popUp.style.display = "initial";
        alert(message);
    }
}


async function sendMail() {

    if (formValidation() == true) {
        console.log("form is valid");
        refreshCaptcha();


        let submitBtn = document.getElementById('SubmitButton');
        submitBtn.style.color = "gray";

        submitBtn.removeEventListener('click', sendMail);

        await window.Email.send({
            SecureToken: "3b017dd8-7ed2-4097-94ea-729976f97640",
            To: 'hgaur701@gmail.com',
            From: 'digitalnausea@gmail.com',
            Subject: "From Portfolio",
            Body: `Name: ${document.getElementById('ni').value} <br> Email: ${document.getElementById('ei').value} <br> Message: ${document.getElementById('ms').value}`
        }).then(
            // message => alert(message)
            message => popupFunction(message)
        );

        submitBtn.style.color = "yellow";
        submitBtn.addEventListener('click', sendMail);

        //TODO : create mail sent successfully pop up.

        //********************************* FOR TESTING *****************************
        // let index = 0;
        // let interval = setInterval(waitingTest, 50);

        // function waitingTest() {
        //     submitBtn.style.color = "gray";
        //     console.log("lol");

        //     if (index > 10) {

        //         clearInterval(interval);
        //         submitBtn.style.color = "yellow";
        //     }
        //     index++;
        // }
        //**************************************************************************

        document.getElementById('ei').value = "";
        document.getElementById('ni').value = "";
        document.getElementById('ms').value = "";

    }
    else {

        console.log("form is not valid!");
    }

}

let captchaText = document.querySelector('#captchaScreen');
var ctx = captchaText.getContext("2d");
ctx.font = "35px Georgia";
ctx.fillStyle = "yellow";


let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];

// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA

for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}


ctx.fillText(emptyArr.join(''), captchaText.width / 7, captchaText.height / 2);


function refreshCaptcha() {

    document.getElementById("captchaInput").value = "";

    emptyArr = [];

    for (let j = 1; j <= 7; j++) {
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    ctx.fillText(emptyArr.join(''), captchaText.width / 4, captchaText.height / 2);
}