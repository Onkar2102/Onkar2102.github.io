// ANIMATE TEXT - TYPING EFFECT
var typed = new Typed(".multiple-text", {
    //TODO: Replace filler word
    strings:["Innovative", "Deligent", "Versatile", "Collaborative", "Meditator"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    }
) 

// Takes a pdf file and opens it in another window
// Replace the current file with your own resume
function downloadFile(){
    window.open("files/CurrentResume.pdf")
}


// COPIED FROM SWIPER API
const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15.5,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop:true,
    pagination: {
        el: ".swiper-pagination",}
});
