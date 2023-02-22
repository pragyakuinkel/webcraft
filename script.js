var count=0;
function changeImage() {
	count = count +1;
  const activeImage = document.querySelector('.slideshow img.active');
  let nextImage = activeImage.nextElementSibling;
  if (count==3) {
    nextImage = document.querySelector('.slideshow img:first-child');
    count=0;
  }
  activeImage.classList.remove('active');
  nextImage.classList.add('active');
}