const btnOpenLeft = document.querySelector(".mobile-navbar i");
const btnCloseLeft = document.querySelector(".close-mobile");
const leftContent = document.querySelector(".left-content");
if(leftContent!=null) {
    btnOpenLeft.onclick = () => {
        leftContent.classList.toggle("hidden");
    }
}
if(leftContent!=null) {
    btnCloseLeft.onclick = () => {
        leftContent.classList.toggle("hidden");
    }
}
