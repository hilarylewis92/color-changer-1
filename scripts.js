// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     document.getElementById('body').style.background = color;
//     }
//     // return color;
// }

var colorList = new Array ('#000000', '#ff0000', '#1075bc', '#07adeb', '#acdfe8', '#ff4265', '#54ff9f');
var color = colorList[Math.floor(Math.random()*colorList.length)];

// function randomColorGenerator() {
//
// }

$('.btn').on('click', function() {
  // for (var i = 0; i < 7; i++);
  // color += colorList[Math.floor(Math.random()*colorList.length)];
  document.body.style.background = color;
});
