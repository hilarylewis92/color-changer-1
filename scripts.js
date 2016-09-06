// $('.btn').on('click', function() {
//   function randomColorGenerator() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//   document.body.style.background = color;
//   }
// });

var colorList = new Array("#000000", "#ff0000", "#07adeb", "#ff4265", "#54ff9f", "#845656", "#ecda3a", "#381938");

$('.btn').on('click', function() {
  document.body.style.background = colorList[Math.floor(Math.random() * colorList.length)];
});

$('.btn-responsive').on('click', function() {
  document.body.style.background = 'white';
});
