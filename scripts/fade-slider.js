(function() {

  let slides = document.querySelectorAll('.fade-slider__item');
  let index = 0;
  let activeClass = "fade-slider__item--visible";
  console.log(slides[1]);


  setInterval(function () {
    slides[index].classList.remove(activeClass);
    index = index + 1;

    if (index + 1 > slides.length) {
      index = 0;
    } 

    slides [index].classList.add(activeClass);
  }, 5000);  
}())