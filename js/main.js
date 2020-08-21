let time = 2500;
let currentImageIndex = 0;
let images = document.querySelectorAll('.c-top-slider__img');
let max = images.length;

const topSlider = document.querySelector('c-top-slider');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

function startJs() {
  const slideImages = () => {
    images[currentImageIndex].classList.remove('selected-img');
  
    currentImageIndex++;
  
    if (currentImageIndex >= max) {
      currentImageIndex = 0;
    }
  
    images[currentImageIndex].classList.add('selected-img');
  };
  
  const previousSlide = () => {
    images[currentImageIndex].classList.remove('selected-img');
  
    currentImageIndex--;
  
    if (currentImageIndex === -1) {
      currentImageIndex = 5;
    }
  
    images[currentImageIndex].classList.add('selected-img');
  };
  
  const startSlider = () => {
    setInterval(slideImages, time);
  };

  startSlider()
  
  next.addEventListener('click', slideImages);
  previous.addEventListener('click', previousSlide);
}



window.addEventListener('load', startJs);
