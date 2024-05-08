//----------rigth side magical circle section animation---------------------------------------------

const magicCircleContainer=document.querySelector(".magical-circle-rigth");
const magicCircleIcon=document.querySelector(".magical-circle-icons");
const magicCircleImage=document.querySelector(".magical-circle-img");

// add event click on magicCircle div
magicCircleContainer.addEventListener('click',()=>{
      //add and remove class to show and hide magical circle content in rigth side
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
const questionSliderHeadings=document.querySelectorAll(".question-languages-slider-left-headings h1");
const questionSliderSlides=document.querySelectorAll(".question-languages-slider-rigth img");
const questionSliderClasses=["question-languages-imgone-rigth","question-languages-imgtwo-left",
      "question-languages-slider-opacity","slider-headings-animation"]

questionSliderArrows.forEach((arrow)=>{

    arrow.addEventListener('click',function(){
      //handle slides moving
      questionSliderSlides.forEach((slide,index)=>slide.classList.toggle(questionSliderClasses[index]));
      //handle arrows buttons visibality
      questionSliderArrows.forEach(arrow=>arrow.classList.toggle(questionSliderClasses[2]));
      //handle changeing headings
      questionSliderHeadings.forEach(heading=>heading.classList.toggle(questionSliderClasses[3]));
    });

});
//--------------------End  Question and Languages slider-------------------