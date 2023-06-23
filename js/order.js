$(document).ready(function() {
  var imageContainers1 = $('.image-container');
  var texts1 = $('.text');

  imageContainers1.each(function(i) {
    var images = $(this).find('.gallery-image');
    var currentImageIndex = 0;

    function switchImage() {
      images.eq(currentImageIndex).hide();
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images.eq(currentImageIndex).show();
    }

    $(this).on('mouseover', function() {
      texts1.eq(i).show();
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask2)');
    });

    $(this).on('mouseout', function() {
      texts1.eq(i).hide();
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask1)');
    });

    $(this).on('click', function() {
      switchImage();
    });
  });

  var imageContainers2 = $('.image-container2');
  var texts2 = $('.text2');

  imageContainers2.each(function(i) {
    var images = $(this).find('.gallery-image2');
    var currentImageIndex = 0;

    function switchImage() {
      images.eq(currentImageIndex).hide();
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images.eq(currentImageIndex).show();
    }

    $(this).on('mouseover', function() {
      texts2.eq(i).show();
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask4)');
    });

    $(this).on('mouseout', function() {
      texts2.eq(i).hide();
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask3)');
    });

    $(this).on('click', function() {
      switchImage();
    });
  });
});
