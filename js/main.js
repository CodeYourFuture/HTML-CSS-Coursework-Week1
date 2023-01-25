//Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html , body").animate(
      {
        scrollTop: $(hash).offset().top - 69,
      },
      800
    );
  }
});
