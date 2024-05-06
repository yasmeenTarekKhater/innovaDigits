//----------add active class to navbar links && changing features image on hover links--------------
const navBarFeaturelinks = document.querySelectorAll('.features-dropdown a');
const navBarlinks = document.querySelectorAll('.navbar-pages');
const featuresImages=document.querySelectorAll('.features-dropdown-images');

navBarlinks.forEach(navLink=>{
      navLink.addEventListener('click',function(){
        navBarlinks.forEach(navLink=>{navLink.classList.remove('active')}); 
        this.classList.add('active');
      });
});

navBarFeaturelinks.forEach((link, index) => {
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
const progressBarColors= document.querySelectorAll(".progress-bar-colors div");
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
const progressBarsHorizontal=document.querySelectorAll(".quetion-horizontal-chart-left .progress-bar");
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

//--------------------Pie Chart animation-------------------

const pieChartCircle=document.querySelector(".pie-chart-circle");
const pieChartAvatars=document.querySelectorAll(".pie-chart-circle img");

// add event click to change color and scale and show avatars
pieChartCircle.addEventListener('click',function(){

  this.classList.add("pie-chart-circle-animation");
  pieChartAvatars.forEach((avatar)=>{
      avatar.classList.add("pie-avatars-animation");
  });
});

//--------------------End  Pie Chart animation-------------------

//-------------------- Vertical line bars setup & animation -------------------
const ctx = document.getElementById('myChart');
const verticlChartContainer=document.querySelector(".vertical-bars-chart-left");
const verticlChartImages=document.querySelectorAll(".vertical-bars-chart-left img");
let dataValues;

const  data= {
      labels: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5',"Answer 6","Answer 7","Answer 8"],
      datasets: [{
        data:dataValues ,
        borderWidth: 0,
        backgroundColor:['#759BE4','#6200EE','#85CF88','#F7A66B','#CEB0FA','#8133F1','#CEB0FA','#6CAEAE'],
        barPercentage:0.4,
      },
      {
        data:Array(8).fill([1,100]),
        borderWidth: 0,
        backgroundColor:'#F2F4F7',
        barPercentage:0.4,
      },
    ]
};
const options= {
      responsive: true,
      maintainAspectRatio: 1,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false,
        }
      },
      scales: {
        y: {
          beginAtZero:true,
          min:0,
          max:100,
          ticks: {
            callback: function(value) {
              return value + '%';
            },
            stepSize: 10,
            color:"#615E83",
            font: {
              size: 9
            }
          },
          border:{
            dash:[4,4]
          },
          stacked: true,
        },
        x:{
          grid: {
            display: false,
          },
          ticks: {
            color: '#615E83',
            font: {
              size: 9
            }
          },
          stacked: true,
        }
      },
}
verticlChartContainer.addEventListener('click',()=>{
  dataValues=[30, 50, 20,10, 30, 30,30,70];
  chart.data.datasets[0].data = dataValues; // Update the chart's data on click to chart
  chart.update(); // Render the updated chart
  verticlChartImages.forEach(img=>{img.classList.add("vertical-bars-chart-img-opacity")}); // show emojies 
});
const chart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});
//--------------------End  Vertical line bars setup & animation-------------------

//--------------------Question and Languages slider-------------------

const questionSliderArrows=document.querySelectorAll(".question-languages-slider-arrows div");
const questionSliderSlides=document.querySelectorAll(".question-languages-slider-rigth img");
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
const freeTrailContent=document.querySelectorAll(".free-trail-content div");
const freeTrailShadow=document.querySelector(".free-trail-shadow");
const freeTrailCkasses=["free-trail-container-left-move","free-trail-container-rigth-move"];


freeTrailContainer.addEventListener('click',function(){
  freeTrailContent.forEach((content,index)=>{
    content.classList.toggle(freeTrailCkasses[index]);
  });
  freeTrailShadow.classList.toggle("free-trail-shadow-transparent");
  this.classList.toggle("free-trail-container-small");
});