//----------changing features image on hover links----------------------------------------------------
const links = Array.from(document.querySelectorAll('.features-dropdown a'));
const featuresImages=Array.from(document.querySelectorAll('.features-dropdown-images'));

// Add event listeners to the links
links.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
      // Hide all images
      featuresImages.forEach(image => image.classList.add('hide-features-images'));
  
      // Show the corresponding image
      featuresImages[index+1].classList.remove('hide-features-images');
    });
  
    link.addEventListener('mouseleave', () => {
      // Show the default image
      featuresImages[0].classList.remove('hide-features-images');
  
      // Hide other images
      for (let i = 1; i < featuresImages.length; i++) {
        featuresImages[i].classList.add('hide-features-images');
      }
    });
  });
//----------End changing features image on hover links---------------------------------------------

//----------rigth side magical circle section animation---------------------------------------------

const magicCircleContainer=document.querySelector(".magical-circle-rigth");
const magicCircleIcon=document.querySelector(".magical-circle-icons");
const magicCircleImage=document.querySelector(".magical-circle-img");

// add event click on magicCircle div
magicCircleContainer.addEventListener('click',()=>{
      //add and remove class
      magicCircleIcon.classList.toggle("magical-circle-icons-left");
      magicCircleImage.classList.toggle("magical-circle-img-rigth");
});
//---------- End rigth side magical circle section animation---------------------------------------------


//-------------------- Question progress bar animation-------------------

const progressBar=document.querySelector(".progress-bar-colors");
const progressBarEmoji=document.querySelector(".progress-bar-emoji");
const progressBarColors= Array.from(document.querySelectorAll(".progress-bar-colors div"));
const progressBarColorsClasses=["progress-bar-red-animation","progress-bar-yellow-animation","progress-bar-green-animation"];

// add event click on progress bar to handle showing emojis and colors
progressBar.addEventListener('click',()=>{

    progressBarEmoji.classList.add("progress-bar-emoji-animation");
    progressBarColors.forEach((color,index)=>{
      color.classList.add(progressBarColorsClasses[index]);
    });

});


//-------------------- End Question progress bar animation-------------------

//-------------------- Question progress bars Horizontal animation-------------------

const barsHorizontalContainer=document.querySelector(".quetion-horizontal-chart-left");
const progressBarsHorizontal=Array.from(document.querySelectorAll(".quetion-horizontal-chart-left .progress-bar"));
const progressBarsHorizontalStars=document.querySelector(".quetion-horizontal-chart-left .progress img");

const progressBarsWidth=["progress-bar-horizontal-one","progress-bar-horizontal-two",
"progress-bar-horizontal-three","progress-bar-horizontal-four","progress-bar-horizontal-five"];


//add event click increase width of progress bars
barsHorizontalContainer.addEventListener('click',()=>{
    progressBarsHorizontal.forEach((bar,index)=>{
      bar.classList.add(progressBarsWidth[index])
    });
    progressBarsHorizontalStars.classList.add("quetion-horizontal-chart-stars");
});
//--------------------End  Question progress bars Horizontal animation-------------------

//--------------------End  Question progress bars Horizontal animation-------------------

const pieChartCircle=document.querySelector(".pie-chart-circle");
const pieChartAvatars=Array.from(document.querySelectorAll(".pie-chart-circle img"));

// add event click to change color and scale and show avatars
pieChartCircle.addEventListener('click',function(){

  this.classList.add("pie-chart-circle-animation");
  pieChartAvatars.forEach((avatar,index)=>{
      avatar.classList.add("pie-avatars-animation");
  });
});

//--------------------End  Question progress bars Horizontal animation-------------------

//--------------------Vertical line bars  animation -------------------

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5',"Answer 6","Answer 7","Answer 8"],
      datasets: [{
        data: [30, 50, 20,10, 30, 30,30,80],
        pointLabels: [],
        borderWidth: 0,
        backgroundColor: ['red','blue','pink','purple'],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value, index, values) {
              return value + '%';
            },
            stepSize: 10,
            max:100,
            min: 0
          }
        }
      },
    },
});

//--------------------End  Vertical line bars animation-------------------

//--------------------Question and Languages slider-------------------

const questionSliderArrows=Array.from(document.querySelectorAll(".question-languages-slider-arrows div"));
const questionSliderSlides=Array.from(document.querySelectorAll(".question-languages-slider-rigth img"));
const questionSliderClasses=["question-languages-imgone-rigth","question-languages-imgtwo-left","question-languages-slider-opacity"]

questionSliderArrows.forEach((arrow)=>{
    arrow.addEventListener('click',function(){
      //handle slides moving
      questionSliderSlides[0].classList.toggle(questionSliderClasses[0]);
      questionSliderSlides[1].classList.toggle(questionSliderClasses[1]);
      //handle arrows visibality
      questionSliderArrows[0].classList.toggle(questionSliderClasses[2]);
      questionSliderArrows[1].classList.toggle(questionSliderClasses[2]);
    });
});
//--------------------End  Question and Languages slider-------------------

const freeTrailContainer=document.querySelector(".free-trail-container");
const freeTrailContent=Array.from(document.querySelectorAll(".free-trail-content div"));
const freeTrailShadow=document.querySelector(".free-trail-shadow");
const freeTrailCkasses=["free-trail-container-left-move","free-trail-container-rigth-move"];


freeTrailContainer.addEventListener('click',function(){
  freeTrailContent.forEach((content,index)=>{
    content.classList.toggle(freeTrailCkasses[index]);
  });
  freeTrailShadow.classList.toggle("free-trail-shadow-transparent");
  this.classList.toggle("free-trail-container-small");
});