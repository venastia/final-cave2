$(document).ready(function () {
  const carousel = $("#carousel");
  const images = Array.from(carousel.children());
  const captionText = $("#captionText");

  let counter = 0;

  images.forEach((image, i) => {
    gsap.set(image, {
      x: (i - counter) * 520,
      filter: `blur(${Math.abs(i - counter) * 2}px)`,
    });
  });

  function rotateImages() {
    counter = counter + 1 >= images.length ? 0 : counter + 1;

    images.forEach((image, i) => {
      let newX = (i - counter) * 520;
      gsap.to(image, {
        duration: 1,
        x: newX,
        filter: `blur(${Math.abs(i - counter) * 2}px)`,
        ease: "power1.out",
      });
    });
    captionText.text(imageCaptions[counter]);
  }

  const imageCaptions = [
    "City architecture: Rome, Daa Wuu",
    "City architecture: Riga, Daa Wuu",
    "How to transform your routine (1), Doo Shuu",
    "How to transform your routine (3), Doo Shuu",
    "Cave Land Festival",
    "Cave Land Festival",
    "Cave Land Festival",
    "Rare stones exhibition",
    "Rare stones exhibition",
    "From curve to straight: drawing class",
    "From curve to straight: drawing class",
    "From curve to straight: drawing class",
    "Block 14/21",
    "Block 48",
    "Fair(y) wood x CoWood",
    "Fair(y) wood x CoWood",
    "Fair(y) wood x CoWood",
    "Brunch with floristic bureau",
    "Brunch with floristic bureau",
    "Brunch with floristic bureau",
    "Primi conversation",
    "Primi conversation",
    "Primi conversation",
    "City architecture: Rome, Daa Wuu",
    "City architecture: Riga, Daa Wuu",
    "How to transform your routine (1), Doo Shuu",
    "How to transform your routine (3), Doo Shuu",
    "Cave Land Festival",
    "Cave Land Festival",
    "Cave Land Festival",
    "Rare stones exhibition",
    "Rare stones exhibition",
    "From curve to straight: drawing class",
    "From curve to straight: drawing class",
    "From curve to straight: drawing class",
    "Block 14/21",
    "Block 48",
    "Fair(y) wood x CoWood",
    "Fair(y) wood x CoWood",
    "Fair(y) wood x CoWood",
    "Brunch with floristic bureau",
    "Brunch with floristic bureau",
    "Brunch with floristic bureau",
    "Primi conversation",
    "Primi conversation",
    "Primi conversation",
  ];

  carousel.click(rotateImages);
});
