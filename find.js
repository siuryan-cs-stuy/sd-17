var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return Math.sqrt((x0 - x1)**2 + (y0 - y1)**2);
};


var findIt = function(e) {
  var d = distance(targetX, targetY, event.clientX, event.clientY);
  d = Math.round(d / (distance(0,0,boxWidth/2,boxHeight/2)) * 256);
  console.log(d);
  var color = 255 - d;
  box.style.background = "rgb(" + color + "," + color + "," + 255 + ")";

  if (d < 15) {
    box.style.background = "#000000";
  }
};

box.addEventListener("mousemove", findIt);
