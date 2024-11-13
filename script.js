    
window.addEventListener('click', () => {
    let scrollView = window.scrollY;
    console.log("Being scrolled at " + scrollView);
})

// NAVIGATION --- SHRINK FEATURE

let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    // Check if the user is scrolling down or up
    if (window.scrollY > lastScrollY) {
        // Scrolling down - shrink the navbar
        navbar.classList.add("shrink");
    } else {
        // Scrolling up - return to normal size
        navbar.classList.remove("shrink");
    }
    // Update last scroll position
    lastScrollY = window.scrollY;
});