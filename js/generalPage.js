//handle sliders in general page in one function
function handleSlider(sliderButtons, slides, translateXValue, startCount, endCount, translateIncrement) {
    // > button
    sliderButtons[1].addEventListener('click', function () {
      translateXValue -= translateIncrement;
      slides.forEach(slide => {
        slide.style.transform = `translateX(${translateXValue}%)`;
      });
      startCount++;
      if (startCount === endCount) {
        sliderButtons[1].classList.add("arrows-opacity");
      } else {
        sliderButtons[0].classList.remove("arrows-opacity");
      }
    });
    // < button
    sliderButtons[0].addEventListener('click', function () {
      translateXValue += translateIncrement;
      slides.forEach(slide => {
        slide.style.transform = `translateX(${translateXValue}%)`;
      });
      startCount--;
      if (startCount === 1) {
        sliderButtons[0].classList.add("arrows-opacity");
      } else {
        sliderButtons[1].classList.remove("arrows-opacity");
      }
    });
};

//------------------question slider ------------------------------
const questionSlides = document.querySelectorAll(".question-slider-slide");
const questionSliderButtons = document.querySelectorAll(".question-slider-arrows-container div");

handleSlider(questionSliderButtons, questionSlides,0,1, 3, 100);
//------------------End question slider ------------------------------

//-----------------Insightful Surveys slider--------------------------
const insightfulSlides = document.querySelectorAll(".insightful-surveys-slide");
const insightfulSliderButtons = document.querySelectorAll(".insightful-surveys-arrows div");

handleSlider(insightfulSliderButtons, insightfulSlides,0,1, 4, 200);
//-----------------End Insightful Surveys slider--------------------------