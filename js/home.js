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
