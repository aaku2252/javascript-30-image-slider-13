function debounce(func, wait = 50, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const sliderImage = document.querySelectorAll(".slide-in");
function checkSlide(e) {
    sliderImage.forEach((sliderImage) => {
        //* here we are selecting the half height of the image so that it can slide in when half image comes on screen.
        const slideIn =
            window.scrollY + window.innerHeight - sliderImage.height / 2;
        //* bootom of the image so that we can add the sliding effect not from top but also scrolling from bottom to top.
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideIn > sliderImage.offsetTop;
        const fromBottom = window.scrollY < imageBottom;
        if (isHalfShown && fromBottom) {
            sliderImage.classList.add("active");
        } else {
            sliderImage.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", debounce(checkSlide));
