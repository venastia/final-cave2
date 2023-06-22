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
      texts1.eq(i).addClass('show');
    }

    $(this).mouseover(function() {
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask2)');
      texts1.eq(i).addClass('show');
    });

    $(this).mouseout(function() {
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask1)');
      texts1.eq(i).removeClass('show');
    });

    $(this).click(function() {
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
      texts2.eq(i).addClass('show');
    }

    $(this).mouseover(function() {
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask4)');
      texts2.eq(i).addClass('show');
    });

    $(this).mouseout(function() {
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask3)');
      texts2.eq(i).removeClass('show');
    });

    $(this).click(function() {
      switchImage();
    });
  });
  $(document).ready(function() {
  var imageContainers3 = $('.image-container3');
  var texts3 = $('.text3');

  imageContainers3.each(function(i) {
    var images = $(this).find('.gallery-image3');
    var currentImageIndex = 0;

    function switchImage() {
      images.eq(currentImageIndex).hide();
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images.eq(currentImageIndex).show();
      texts3.eq(i).addClass('show');
    }

    $(this).mouseover(function() {
      images.eq(currentImageIndex).attr('clip-path', 'none');
      texts3.eq(i).addClass('show');
    });

    $(this).mouseout(function() {
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask5)');
      texts3.eq(i).removeClass('show');
    });

    $(this).click(function() {
      switchImage();
    });
  });
});

$(function() {
  var imageContainers4 = $('.image-container4');
  var texts4 = $('.text4');

  imageContainers4.each(function(i) {
    var images = $(this).find('.gallery-image4');
    var currentImageIndex = 0;

    function switchImage() {
      images.eq(currentImageIndex).hide();
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images.eq(currentImageIndex).show();
      texts4.eq(i).addClass('show');
    }

    $(this).mouseover(function() {
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask8)');
      texts4.eq(i).addClass('show');
    });

    $(this).mouseout(function() {
      images.eq(currentImageIndex).attr('clip-path', 'url(#mask7)');
      texts4.eq(i).removeClass('show');
    });

    $(this).click(function() {
      switchImage();
    });
  });
  $(document).ready(function() {
    var imageContainers5 = $('.image-container5');
    var texts5 = $('.text5');

    imageContainers5.each(function(i) {
      var images = $(this).find('.gallery-image5');
      var currentImageIndex = 0;

      function switchImage() {
        images.eq(currentImageIndex).hide();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images.eq(currentImageIndex).show();
        texts5.eq(i).addClass('show');
      }

      $(this).mouseover(function() {
        images.eq(currentImageIndex).attr('clip-path', 'url(#mask10)');
        texts5.eq(i).addClass('show');
      });

      $(this).mouseout(function() {
        images.eq(currentImageIndex).attr('clip-path', 'url(#mask9)');
        texts5.eq(i).removeClass('show');
      });

      $(this).click(function() {
        switchImage();
      });
    });

    var imageContainers6 = $('.image-container6');
    var texts6 = $('.text6');

    imageContainers6.each(function(i) {
      var images = $(this).find('.gallery-image6');
      var currentImageIndex = 0;

      function switchImage() {
        images.eq(currentImageIndex).hide();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images.eq(currentImageIndex).show();
        texts6.eq(i).addClass('show');
      }

      $(this).mouseover(function() {
        images.eq(currentImageIndex).attr('clip-path', 'url(#mask12)');
        texts6.eq(i).addClass('show');
      });

      $(this).mouseout(function() {
        images.eq(currentImageIndex).attr('clip-path', 'url(#mask11)');
        texts6.eq(i).removeClass('show');
      });

      $(this).click(function() {
        switchImage();
      });
    });

    var imageContainers7 = $('.image-container7');
    var texts7 = $('.text7');

    imageContainers7.each(function(i) {
      var images = $(this).find('.gallery-image7');
      var currentImageIndex = 0;

      function switchImage() {
        images.eq(currentImageIndex).hide();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images.eq(currentImageIndex).show();
        texts7.eq(i).addClass('show');
      }

      $(this).mouseover(function() {
        images.eq(currentImageIndex).attr('clip-path', 'url(#mask14)');
        texts7.eq(i).addClass('show');
      });

      $(this).mouseout(function() {
        images.eq(currentImageIndex).attr('clip-path', 'url(#mask13)');
        texts7.eq(i).removeClass('show');
      });

      $(this).click(function() {
        switchImage();
      });
    });
});
});
});


$(function() {
  var form = $('#form');
  var btn = $('#open_form');
  var closeIcon = $('#close_form');

  btn.click(function() {
    form.css('display', 'block');
    $('body').addClass('form_open');
    $('.menu').addClass('blur');
    $('.image-container').addClass('blur');
    $('.image-container2').addClass('blur');
    $('.order').addClass('blur');
  });

  closeIcon.click(function() {
    form.css('display', 'none');
    $('body').removeClass('form_open');
    $('.menu').removeClass('blur');
    $('.image-container').removeClass('blur');
    $('.image-container2').removeClass('blur');
    $('.order').removeClass('blur');
  });

  $(window).click(function(event) {
    if (event.target == form[0]) {
      form.css('display', 'none');
      $('body').removeClass('form_open');
      $('.menu').removeClass('blur');
      $('.image-container').removeClass('blur');
      $('.image-container2').removeClass('blur');
      $('.order').removeClass('blur');
    }
  });
});

$(function() {
  var sendButton = $('input[type="submit"]');
  var inputFields = $('#full_form input[type="text"], #full_form textarea');

  sendButton.click(function(event) {
    event.preventDefault();
    this.value = 'sent';
  });

  inputFields.on('input', function() {
    sendButton.val('send');
  });
});
