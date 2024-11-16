    
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


