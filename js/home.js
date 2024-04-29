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

magicCircleContainer.addEventListener('click',()=>{
      magicCircleIcon.classList.toggle("magical-circle-icons-left");
      magicCircleImage.classList.toggle("magical-circle-img-rigth");
});
//---------- End rigth side magical circle section animation---------------------------------------------
