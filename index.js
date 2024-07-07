/*
    functionality for slideshow
*/
let slides = null;
let index = 0;

/*
    event lisenter to get all slides on window load once
*/
window.addEventListener("load", (event) => {
    slides = document.getElementsByClassName("slide");
});

/*
 easy next slide and current slide button clicks
*/
function nextSlide(i) {
    showSlide(index += i);
}

function currentSlide(i) {
    showSlide(index = i);
}

/*
    showSlide will update CSS to show current slide
*/
function showSlide(i) {
    let n;
    if (i > slides.length)
    {
        index = 1
    }
    if (i < 1)
    {
        index = slides.length;
    }
    for (n = 0; n < slides.length; n++)
    {
        slides[n].style.display = "none";
    }
    slides[index-1].style.display = "flex";
}

/*
    functionality for clickable menu; event listener on click after load occured
    so that we know there is something to click
*/

window.addEventListener("load", (event) => {
    document.getElementById("collapse").addEventListener("click", function dropDown() 
{
    document.getElementsByClassName("contact-me")[0].classList.toggle("show")
})});