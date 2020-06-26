/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
 */





var images=["images/logo4.jpg","images/logo3.jpg","images/logo.jpg","images/logo4.png"];


//setInterval(next,5000);
/* function next(){
	
	var slider = document.getElementById("slider");
	num++;
	if(num >=images.length){num=0;}
	
	slider.src=images[num];
	
	
} */

var images=["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg","images/img8.jpg"];
var num=0;
var temp=0;

function plusSlides(){

	var slider = document.getElementById("slider");
	num++;
	if(num >=images.length){num=0;
	temp=0;}
	
	slider.src=images[num];
	temp+=num;
	
}

function MinusSlides(){

	var slider = document.getElementById("slider");
	temp--;
	if(temp <0){temp=images.length-1;}
	if(temp >=images.length){temp=0;}
	slider.src=images[temp];
	
} 


















