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



// var colorList = new Array("#000000", "#ff0000", "#07adeb", "#ff4265", "#54ff9f", "#845656", "#ecda3a", "#381938");
//
// $('.btn').on('click', function() {
//   document.body.style.background = colorList[Math.floor(Math.random() * colorList.length)];
// });
//
// $('.btn-responsive').on('click', function() {
//   document.body.style.background = 'white';
// });
