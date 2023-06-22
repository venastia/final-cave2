$(document).ready(function () {
  var wrapperRows = $(".wrappers");

  wrapperRows.each(function (j) {
    var wrappers = $(this).find(".wrapper");
    var texts = $(this).find(".text");

    wrappers.each(function (i) {
      var imageContainer = $(this).find(".image-container").eq(0);
      var image = imageContainer.find(".gallery-image").eq(0);
      var caption = imageContainer.find(".caption").eq(0);

      var masks;
      switch (j * wrappers.length + i) {
        case 0:
          masks = ["#mask1", "#mask2"];
          break;
        case 1:
          masks = ["#mask3", "#mask4"];
          break;
        case 2:
          masks = ["#mask5", "#mask6"];
          break;
        case 3:
          masks = ["#mask7", "#mask8"];
          break;
        case 4:
          masks = ["#mask9", "#mask10"];
          break;
        case 5:
          masks = ["#mask11", "#mask12"];
          break;
        case 6:
          masks = ["#mask13", "#mask14"];
          break;
        case 7:
          masks = ["#mask15", "#mask16"];
          break;
        default:
          break;
      }
      image.css("clip-path", `url(${masks[0]})`);

      $(this).mouseenter(function () {
        texts.eq(i).css("opacity", "1");
        caption.addClass("hidden");
        image.css("clip-path", `url(${masks[1]})`);
        image.css("filter", "blur(0)");
      });

      $(this).mouseleave(function () {
        texts.eq(i).css("opacity", "0");
        caption.removeClass("hidden");
        image.css("clip-path", `url(${masks[0]})`);
        image.css("filter", "blur(5px)");
      });
    });
  });

  $("#cart1").click(function () {
    $(this).attr("src", function (index, attr) {
      return attr.includes("tocart") ? "incart.svg" : "tocart.svg";
    });
  });

  $("#cart2").click(function () {
    $(this).attr("src", function (index, attr) {
      return attr.includes("tocart") ? "incart.svg" : "tocart.svg";
    });
  });

  $("#cart3").click(function () {
    $(this).attr("src", function (index, attr) {
      return attr.includes("tocart") ? "incart.svg" : "tocart.svg";
    });
  });

  $("#cart4").click(function () {
    $(this).attr("src", function (index, attr) {
      return attr.includes("tocart") ? "incart.svg" : "tocart.svg";
    });
  });

  $("#cart5").click(function () {
    $(this).attr("src", function (index, attr) {
      return attr.includes("tocart") ? "incart.svg" : "tocart.svg";
    });
  });

  $("#cart6").click(function () {
    $(this).attr("src", function (index, attr) {
      return attr.includes("tocart") ? "incart.svg" : "tocart.svg";
    });
  });

  $("#cart7").click(function () {
    $(this).attr("src", function (index, attr) {
      return attr.includes("tocart") ? "incart.svg" : "tocart.svg";
    });
  });
  $("#cart8").click(function () {
    $(this).attr("src", function (index, attr) {
      return attr.includes("tocart") ? "incart.svg" : "tocart.svg";
    });
  });
});
