var imageContainers1 = Array.from(document.getElementsByClassName('image-container'));
var texts1 = Array.from(document.getElementsByClassName('text'));

for (let i = 0; i < imageContainers1.length; i++) {
  let images = Array.from(imageContainers1[i].getElementsByClassName('gallery-image'));
  let currentImageIndex = 0;

  function switchImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
  }

  imageContainers1[i].addEventListener('mouseover', function() {
    texts1[i].style.display = 'block';
    images[currentImageIndex].setAttribute('clip-path', 'url(#mask2)');
  });

  imageContainers1[i].addEventListener('mouseout', function() {
    texts1[i].style.display = 'none';
    images[currentImageIndex].setAttribute('clip-path', 'url(#mask1)');
  });

  imageContainers1[i].addEventListener('click', function() {
    switchImage();
  });
}

var imageContainers2 = Array.from(document.getElementsByClassName('image-container2'));
var texts2 = Array.from(document.getElementsByClassName('text2'));

for (let i = 0; i < imageContainers2.length; i++) {
  let images = Array.from(imageContainers2[i].getElementsByClassName('gallery-image2'));
  let currentImageIndex = 0;

  function switchImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;

    images[currentImageIndex].style.display = 'block';
  }

  imageContainers2[i].addEventListener('mouseover', function() {
    texts2[i].style.display = 'block';
    images[currentImageIndex].setAttribute('clip-path', 'url(#mask4)');
  });

  imageContainers2[i].addEventListener('mouseout', function() {
    texts2[i].style.display = 'none';
    images[currentImageIndex].setAttribute('clip-path', 'url(#mask3)');
  });

  imageContainers2[i].addEventListener('click', function() {
    switchImage();
  });
}
