$(document).ready(function () {
  const images = $(".image-stack img").toArray();

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  images.forEach((img, i) => {
    $(img).css("z-index", i);
  });

  images.forEach((img) => {
    $(img).click(function () {
      $(this).css(
        "z-index",
        Math.min(
          ...images.map((img) => parseInt($(img).css("z-index")))
        ) - 1
      );
    });
  });

  images.forEach((img) => {
    const xOffset = Math.floor(Math.random() * 50) - 25;
    const yOffset = Math.floor(Math.random() * 50) - 25;

    $(img).css({
      top: `calc(50% + ${yOffset}px)`,
      left: `calc(50% + ${xOffset}px)`,
      transform: "translate(-50%, -50%)",
    });
    if (Math.random() > 0.5) {
      const rotation = Math.floor(Math.random() * 20) - 10;
      $(img).css(
        "transform",
        `translate(-50%, -50%) rotate(${rotation}deg)`
      );
    }

    $(img).click(function () {
      $(this).css("z-index", -1);
    });
  });
});
$(window).on('load', function() {
  $('.blur').removeClass('blur');
});
