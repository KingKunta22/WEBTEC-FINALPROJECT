    
window.addEventListener('click', () => {
    let scrollView = window.scrollY;
    console.log("Being scrolled at " + scrollView);
})

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


// HARD COOOOOOOOOOOOOOOOOOOOOODE 8))

const registerBtn = document.querySelector('#register');
const loginBtn = document.querySelector('#login');

const loginTag = document.querySelector('#login-tag');
const registerTag = document.querySelector('#register-tag');

const loginPg = document.querySelector('#login-page');
const registerPg = document.querySelector('#register-page');

registerBtn.addEventListener('click', () => {
    loginPg.style.left = '0';
    registerPg.style.left = '100%';
})

loginBtn.addEventListener('click', () => {
    loginPg.style.left = '-100vh';
    registerPg.style.left = '0%';
})

registerTag.addEventListener('click', () => {
    loginPg.style.left = '0';
    registerPg.style.left = '100%';
})

loginTag.addEventListener('click', () => {
    loginPg.style.left = '-100vh';
    registerPg.style.left = '0%';
})


let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function() {
    let value = window.scrollY - 800;

    wave1.style.backgroundPositionX = 1 + value * 1 + 'px';
    wave2.style.backgroundPositionX = 2 + value * -1 + 'px';
    wave3.style.backgroundPositionX = 1 + value * 3 + 'px';
    wave4.style.backgroundPositionX = 2 + value * -2 + 'px';
})