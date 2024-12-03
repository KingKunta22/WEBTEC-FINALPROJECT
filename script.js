// NAVIGATION --- SHRINK FEATURE

let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
    lastScrollY = window.scrollY;
});

// Since scrollToTop() overrides this shrink feature. I had to do this
// DEBUG FROM MY LOVE IN JAPANESE XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

function scrollToTop() {
    isScrollingProgrammatically = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        isScrollingProgrammatically = false;
        lastScrollY = window.scrollY;
    }, 500); // Adjust timeout based on scroll animation duration
}

// HARD COOOOOOOOOOOOOOOOOOOOOODE 8))

const registerBtn = document.querySelector('#register');
const loginBtn = document.querySelector('#login');

const loginPg = document.querySelector('#login-page');
const registerPg = document.querySelector('#register-page');

registerBtn.addEventListener('click', () => {
    scrollToTop();
    formPg.style.visibility = "visible";
    loginPg.style.left = '0';
    registerPg.style.left = '100%';
})

loginBtn.addEventListener('click', () => {
    scrollToTop();
    formPg.style.visibility = "visible";
    loginPg.style.left = '-100vh';
    registerPg.style.left = '0%';
})

// CLOSE BUTTON HARD COOOOOOOODE

const closeBtn = document.querySelector("#closebtn");
const formPg = document.querySelector('form');

closeBtn.addEventListener('click', () => {
    formPg.style.visibility = "hidden";
    loginPg.style.left = '-100vh'; // Reset position of login page
    registerPg.style.left = '100%'; // Reset position of register page
})

// FUNCTION FOR THE USER TO REGISTER THEN LOG IN

const userPassword = document.querySelector('#userPassword');
const userUsername = document.querySelector('#userUsername');
const welcomeText = document.querySelector('.welcome');
const signInBtn = document.querySelector("#signin");
const signUpBtn = document.querySelector("#signup");
let isLoggedIn = false;



signUpBtn.addEventListener('click', () => {
    event.preventDefault();
    formPg.style.visibility = "visible";
    loginPg.style.left = '0';
    registerPg.style.left = '100%';
    let newUser = document.querySelector('#newUserUsername');
    let newPassword = document.querySelector('#newUserPassword');
    console.log(newUser.value, newPassword.value);
    
    signInBtn.addEventListener('click', () => {
        event.preventDefault();
        console.log(newUser.value, newPassword.value);  
        if (userUsername.value == newUser.value && userPassword.value == newPassword.value) {
            registerBtn.style.visibility = "hidden";
            loginBtn.style.visibility = "hidden";
            isLoggedIn = true;
            welcomeText.style.opacity = "1";
            formPg.style.visibility = "hidden";
            loginPg.style.left = '-100vh'; // Reset position of login page
            registerPg.style.left = '100%'; // Reset position of register page
        } else {
            console.log("Invalid credentials");
            isLoggedIn = false;
        }
    })
})

signInBtn.addEventListener('click', () => {
    event.preventDefault();
    if(userUsername.value == "WEBTECPROJECT" && userPassword.value == "WEBTECSAAD") {
        registerBtn.style.visibility = "hidden";
        loginBtn.style.visibility = "hidden";
        isLoggedIn = true;
        welcomeText.style.opacity = "1";
        formPg.style.visibility = "hidden";
        loginPg.style.left = '-100vh'; // Reset position of login page
        registerPg.style.left = '100%'; // Reset position of register page
    } else {
        console.log("Invalid credentials");
        isLoggedIn = false;
    }
})


// WAVE ANIMATION JS

let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function() {
    let value = window.scrollY - 800;

    wave1.style.backgroundPositionX = 1 + value * 2 + 'px';
    wave2.style.backgroundPositionX = 1 + value * -1.5 + 'px';
    wave3.style.backgroundPositionX = 1 + value * 0 + 'px';
    wave4.style.backgroundPositionX = 1.5 + value * -1 + 'px';
})


// PARALLAAAAAAAAAAAAAAAAX

const parallaxText = document.querySelector("#parallax-text");
const birds = document.querySelector("#birds");
const cloudRight = document.querySelector("#img-cloud-right");
const cloudLeft = document.querySelector("#img-cloud-left");
const palmMidLeft = document.querySelector("#palm-mid-left");
const palmBtmLeft = document.querySelector("#palm-bottom-left");
const palmBtmRight = document.querySelector('#palm-bottom-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // FOR TEXT ----- 400 is the initial value
    parallaxText.style.top = 400 + value / 5 + "px";

    // FOR BIRDS
    birds.style.top = "-" + value / 6 + "px";
    birds.style.left = -600 + value * 1.5 + "px";

    // FOR CLOUDS
    cloudRight.style.right = "-" + value / 1.5  + "px";

    cloudLeft.style.left = "-" + value / 2 + "px";

    // FOR PALMS
    palmMidLeft.style.left = "-" + value + "px";

    palmBtmLeft.style.left = "-" + value + "px";

    palmBtmRight.style.right = "-" + value + "px";
    palmBtmRight.style.scaleX = "0." + value;
})

const lessonsBtn = document.querySelector("#get-started");

const lessonNine = document.querySelector("#section-nine")
const lessonTen = document.querySelector("#section-ten")
const lessonEleven = document.querySelector("#section-eleven")
const lessonTwelve = document.querySelector("#section-twelve")


lessonsBtn.addEventListener('click', () => {
    if(isLoggedIn == true) {
        ///  advanced lessons should be unlocked
        console.log('unlocked')
        console.log(lessonNine);
        window.open('./Lessons-Page/index.html', '_blank');
    } else if(isLoggedIn == false) {
        console.log('locked')
        console.log(lessonNine);
        window.open('./Lessons-Page-Locked/index.html', '_blank');
        ///  advanced lessons should be unlocked
        lessonNine.classList.add('.locked')
        lessonTen.classList.add('.locked')
        lessonEleven.classList.add('.locked')
        lessonTwelve.classList.add('.locked')
    }
})

const setSailBtn = document.querySelector('#set-sail');

setSailBtn.addEventListener('click', () => {
    document.getElementById("table-of-contents").scrollIntoView();
})