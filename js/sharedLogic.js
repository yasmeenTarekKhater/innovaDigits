//-----------------------nav bar dropdown animation-----------------------------------------------------
//----------add active class to navbar links && changing features image on hover links-------
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
//----------End changing features image on hover links---------------------------------------
//-----------------------End nav bar dropdown animation-----------------------------------------------------

//-----------------------Free trail section animation in home & general pages-----------------------------------------------------
const freeTrailContainer=document.querySelector(".free-trail-container");
const freeTrailContent=document.querySelectorAll(".free-trail-content div");
const freeTrailShadow=document.querySelector(".free-trail-shadow");
const freeTrailClasses=["free-trail-container-left-move","free-trail-container-rigth-move"];


freeTrailContainer.addEventListener('click',function(){
  //handle moving content to left and rigth
    freeTrailContent.forEach((content,index)=>{
      content.classList.toggle(freeTrailClasses[index]);
    });

  //show and remove dark blue shadow
    freeTrailShadow.classList.toggle("free-trail-shadow-transparent");
  //changing background image size
    this.classList.toggle("free-trail-container-small");
});
//-----------------------End Free trail section animation in home & general pages-----------------------------------------------------
