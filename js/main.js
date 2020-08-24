
//slider configurations
let time = 2500;
let currentImageIndex = 0;
let images = document.querySelectorAll('.c-top-slider__img');
let max = images.length;

let imagesResponsive = document.querySelectorAll('.c-top-slider__img--responsive')

const topSlider = document.querySelector('c-top-slider');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

//responsive menu configurations
const overlayDiv = document.querySelector('.overlay')
const hamburgerNav = document.querySelector('.fa-bars')
const navResponsive = document.querySelector('.nav--responsive')

//scroll up configurations
const scrollUpBtn = document.querySelector('.scroll-up')

function startJs() {

  //scroll up button

  //btn show control
  const scrolling = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  }

  window.onscroll = function () {
    scrolling()
  }

  //
  scrollUpBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  //responsive menu

  //hamburger click opens menu
  hamburgerNav.addEventListener('click', () => {
    overlayDiv.style.display = 'block'
    navResponsive.style.left = '0'
  })

  //overlay click closes responsive menu
  overlayDiv.addEventListener('click', () => {
    overlayDiv.style.display = 'none'
    navResponsive.style.left = '-5000px'
  })

  //top slider

  //slide imgs autoplay && clicking on 'next' arrow
  const slideImages = () => {
    images[currentImageIndex].classList.remove('selected-img');
    imagesResponsive[currentImageIndex].classList.remove('selected-img--responsive');

  
    currentImageIndex++;
  
    if (currentImageIndex >= max) {
      currentImageIndex = 0;
    }
  
    images[currentImageIndex].classList.add('selected-img');
    imagesResponsive[currentImageIndex].classList.add('selected-img--responsive');

  };
  
  //slide imgs clicking on 'previous' arrow
  const previousSlide = () => {
    images[currentImageIndex].classList.remove('selected-img');
  
    currentImageIndex--;
  
    if (currentImageIndex === -1) {
      currentImageIndex = 5;
    }
  
    images[currentImageIndex].classList.add('selected-img');
  };
  
  //slide imgs function
  const startSlider = () => {
    setInterval(slideImages, time);
  };

  startSlider()
  
  next.addEventListener('click', slideImages);
  previous.addEventListener('click', previousSlide);
}



window.addEventListener('load', startJs);
