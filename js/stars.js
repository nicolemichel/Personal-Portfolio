
$(document).ready(function() {
    let starCount = Math.ceil(390 + Math.random() * 390);
    // get viewport size
    let bodyHeight = $(document).height();
    let bodyWidth = $(document).width();
    // generate stars (classes range from star1 to star[starCount])
    for (let i = starCount; i > 0; i--) {
      $("body").append("<span class='stars star" + i + "'></span>");
      // constrain star colors to reds & blues
      /* let hue = Math.ceil(Math.random() * 90);
      if (hue > 60) {
        hue = Math.ceil(180 + Math.random() * 45);
      } */
      // set star properties
      // let starColor = "hsl(" + hue + ", 80%, 100%)"; // make white stars
      let xPosition = Math.ceil(Math.random() * bodyWidth);
      let yPosition = Math.ceil(Math.random() * bodyHeight);
      let starSize;
      // medium stars
      if (i > starCount * 0.2) {
        starSize = Math.ceil(Math.random() * 2);
      } else {
        starSize = Math.ceil(Math.random() * 8);
      }
      // big stars
      if (i > starCount * 0.1) {
        starSize = Math.ceil(Math.random() * 4);
      } else {
        starSize = Math.ceil(Math.random() * 10);
      }
      // apply CSS to the stars
      $(".star" + i).css({
        background: "#DEE4EA",
        "border-radius": "50%",
        opacity: "0.5",
        position: "absolute",
        left: xPosition,
        top: yPosition,
        height: starSize,
        width: starSize,
      });
    }
    // parallax stars on scroll 
    $(document.body).on("scroll", function moveStars() {
      let starRellax = new Rellax($(".stars"), {
        speed: 2,
        center: true,
        round: true,
        vertical: true,
      });
    }); 
  }); 
  