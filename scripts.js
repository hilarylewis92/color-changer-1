function randomColorGenerator() {
  return Math.floor(Math.random() * 255) + 1;
}

$('.btn').on('click', function() {
    var color = randomColorGenerator();
    $(document.body).css("background", "rgb(" + color + "," + color + "," + color + ")");
});

$('.btn-responsive').on('click', function() {
  document.body.style.background = 'white';
});
