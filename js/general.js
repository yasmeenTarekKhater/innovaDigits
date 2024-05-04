//------------------question slider ------------------------------
const questionSlide=document.querySelectorAll(".question-slider-slide");//length 3
const questionSlidesContainer=document.querySelector(".question-slider-slides"); 
const questionSliderButtons=document.querySelectorAll(".question-slider-arrows-container div");
let translateXValue = 0;
let count=1;

//enhance this code by making function
    questionSliderButtons[1].addEventListener('click',function(){
        translateXValue -= 81;
        questionSlidesContainer.style.transform = `translateX(${translateXValue}%)`;
        count++;
        if (count === questionSlide.length) {
            questionSliderButtons[1].classList.add("arrows-opacity");
        } else {
            questionSliderButtons[0].classList.remove("arrows-opacity");
        }
    });
    questionSliderButtons[0].addEventListener('click',function(){
        translateXValue += 81;
        questionSlidesContainer.style.transform = `translateX(${translateXValue}%)`;
        count--;
        if (count === 1) {
            questionSliderButtons[0].classList.add("arrows-opacity");
        }
        else {
            questionSliderButtons[1].classList.remove("arrows-opacity");
        }
    });


//------------------End question slider ------------------------------
const insightfulSlidesContainer=document.querySelector(".insightful-surveys-slides"); 
const insightfulSliderButtons=document.querySelectorAll(".insightful-surveys-arrows div");
let translateXValue2 = 0;
let count2=0;

//enhance this code by making function
insightfulSliderButtons[1].addEventListener('click',function(){
        translateXValue -= 70;
        insightfulSlidesContainer.style.transform = `translateX(${translateXValue}%)`;
        count++;
        if (count === 3) {
            this.classList.add("arrows-opacity");
        } else {
            insightfulSliderButtons[0].classList.remove("arrows-opacity");
        }
});
insightfulSliderButtons[0].addEventListener('click',function(){
        translateXValue += 70;
        insightfulSlidesContainer.style.transform = `translateX(${translateXValue}%)`;
        count--;
        if (count === 1) {
            this.classList.toggle("arrows-opacity");
        }
        else {
            insightfulSliderButtons[1].classList.remove("arrows-opacity");
        }
});
