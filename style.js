var count=0;
var counter=0;
var c = 0;
var d= 0;
var e=0;
function changeImage() {
	count = count +1;
  const activeImage = document.querySelector(' img.highlights-events-img');
  let nextImage = activeImage.nextElementSibling;
  if (count==3) {
    nextImage = document.querySelector('.highlights-events img:first-child');
    count=0;
  }
  activeImage.classList.remove('highlights-events-img');
  nextImage.classList.add('highlights-events-img');
}
function changeText() {
	counter = counter +1;
  const activeH1 = document.querySelector('h1.highlights-h1-tag');
  let nextH1 = activeH1.nextElementSibling;
  if (counter==3) {
        nextH1 = document.querySelector('.highlights-events-list h1:first-of-type');
    counter=0;
  }
  activeH1.classList.remove('highlights-h1-tag');
  nextH1.classList.add('highlights-h1-tag');
}

function changeImages() {
	c = c +1;
  const activeImage = document.querySelector('.highlights-events-list-b img.highlights-events-img');
  let nextImage = activeImage.nextElementSibling;
  if (c==3) {
    nextImage = document.querySelector('.highlights-events-b img:first-child');
    c=0;
  }
  activeImage.classList.remove('highlights-events-img');
  nextImage.classList.add('highlights-events-img');
}
function changeTexts() {
	d = d +1;
  const activeH1 = document.querySelector('.highlights-events-list-b h1.highlights-h1-tag');
  let nextH1 = activeH1.nextElementSibling;
  if (d==3) {
        nextH1 = document.querySelector('.highlights-events-list-b h1:first-of-type');
    d=0;
  }
  activeH1.classList.remove('highlights-h1-tag');
  nextH1.classList.add('highlights-h1-tag');
}

function changeImg() {
	e = e +1;
  const activeImage = document.querySelector(' img.carousel-top-index');
  let nextImage = activeImage.nextElementSibling;
  if (e==3) {
    nextImage = document.querySelector('.right-div img:first-child');
    e=0;
  }
  activeImage.classList.remove('carousel-top-index');
  nextImage.classList.add('carousel-top-index');
}
setInterval(changeImg, 3000);


function changeImageAndText() {
  changeImage();
  changeText();
}
function changeImagesAndTexts() {
  changeImages();
  changeTexts();
}
document.addEventListener('DOMContentLoaded', function() {
// Get the div element to be clicked
const clickDiv = document.querySelector(".hamburger");

// Get the div element to show or hide
const targetDiv = document.querySelector(".nav-bar");

// Add an event listener to the clickDiv
clickDiv.addEventListener("click", function() {
  // Toggle the targetDiv's display property
  if (getComputedStyle(targetDiv).display === "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
});
});



