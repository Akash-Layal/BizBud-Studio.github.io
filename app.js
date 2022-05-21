//Preloader 
let preloader = document.getElementById('loading');
window.addEventListener('load', () => {
    preloader.classList.add('loading-finish');
});

//  Back-To-Top Scroll Button 

const scrollBtn = document.getElementById('back-to-top-btn');

document.addEventListener('scroll', () => {

    if (document.documentElement.scrollTop <= 150) {
        scrollBtn.style.display = "none";
    }

    else {
        scrollBtn.style.display = "flex";
    }
});

scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});




// Hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})