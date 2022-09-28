
const navbarButton = document.getElementById('navbar-button');

navbarButton.addEventListener('click', ShowNavbar);

window.addEventListener('load', () => {
    const windowWidth = window.innerWidth;
    const navbar = document.getElementById("navbar");
    if (windowWidth >= 1000) {
        navbar.className = "show";
    }
});
  

function ShowNavbar() {
    const navbar = document.getElementById("navbar");
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    if (navbar.className == "hide") {
        navbar.className = "showme";
        one.className = "one";
        two.className = "two";
        three.className = "three";

    } else {
        navbar.className = "hide";
        one.className = "";
        two.className = "";
        three.className = "";
    }
}

const firstImage = document.getElementById('first-image');
const secondImage = document.getElementById('second-image');
const thirdImage = document.getElementById('third-image');
const fourthImage = document.getElementById('fourth-image');
let i = 0;
function ImagesShow() {
    
    const imagesArray = [firstImage, secondImage, thirdImage, fourthImage];
    if(i == 0){        
        imagesArray[0].className = 'show-image';
        imagesArray[1].className = 'hide-image';
        imagesArray[2].className = 'hide-image';
        imagesArray[3].className = 'hide-image';
    }
    if(i == 1){        
        imagesArray[1].className = 'show-image';
        imagesArray[0].className = 'hide-image';
        imagesArray[2].className = 'hide-image';
        imagesArray[3].className = 'hide-image';

    }
    if(i == 2){        
        imagesArray[2].className = 'show-image';
        imagesArray[0].className = 'hide-image';
        imagesArray[1].className = 'hide-image';
        imagesArray[3].className = 'hide-image';
    }
    if(i == 3){        
        imagesArray[3].className = 'show-image';
        imagesArray[0].className = 'hide-image';
        imagesArray[1].className = 'hide-image';
        imagesArray[2].className = 'hide-image';
    }
    i++;
    if(i > 3)
        i = 0;
}
if (window.innerWidth < 700) {
    setInterval(ImagesShow, 5000);
}

let a = 0;

function ImageAutoSlide() {
    const windowWidth = window.innerWidth;
    const imageWidth = firstImage.offsetWidth;
    if (a == 0) {
        firstImage.style.left = 0;
        secondImage.style.left = imageWidth + 'px';
        thirdImage.style.left = imageWidth * 2 + 'px';
        fourthImage.style.left = -imageWidth  + 'px';
    }
    if (a == 1) {
        firstImage.style.left = -imageWidth  + 'px';
        secondImage.style.left = 0;
        thirdImage.style.left = imageWidth + 'px';
        fourthImage.style.left = imageWidth * 2 + 'px';
    }
    if (a == 2) {
        firstImage.style.left = imageWidth * 2 + 'px';
        secondImage.style.left = -imageWidth  + 'px';
        thirdImage.style.left = 0;
        fourthImage.style.left = imageWidth + 'px';
    }
    if (a == 3) {
        firstImage.style.left = imageWidth + 'px';
        secondImage.style.left = imageWidth * 2 + 'px';
        thirdImage.style.left = -imageWidth  + 'px';
        fourthImage.style.left = 0;
        a = 0;
    }
    
    a++;
}
if (window.innerWidth >= 700) {
    setInterval(ImageAutoSlide, 3000);
}
window.onload = () => {
    const imageWidth = firstImage.offsetWidth;

    firstImage.style.left = 0;
    secondImage.style.left = imageWidth + 'px';
    thirdImage.style.left = imageWidth * 2  + 'px';
    fourthImage.style.left = imageWidth * 3 + 'px';
};




const goOnTop = document.getElementById("go-on-top-button");
function GoToTop() {
    window.scrollTo(0, 0);
}
function ScrollOnTop() {
    let y = window.scrollY;
    if (y >= 200) {
        goOnTop.className = "show-image"
    } else {
        goOnTop.className = "hide-image"
    }
}
window.addEventListener("scroll", ScrollOnTop);
goOnTop.addEventListener('click', GoToTop);