let index = 1;

function nextSlide(i)
{
    showSlide(index += i);
}

function currentSlide(i)
{
    showSlide(index = i);
}

function showSlide(i)
{
    let n;
    let slides = document.getElementsByClassName("slide");
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