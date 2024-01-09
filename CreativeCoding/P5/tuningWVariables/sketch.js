function setup() { // runs once 
  createCanvas(windowWidth, windowHeight);
  fill ("teal");
  strokeWeight(1);
}

function draw() { 
  
  var num = 24; 
  var sideLen = windowWidth/num;
 
  for (var y = 0; y < windowHeight; y = y + sideLen){
    for (var x = 0; x < windowWidth; x = x + sideLen) {
    quad (x, y,
       x + sideLen, y, 
       x + sideLen, y+sideLen,
       x, y+sideLen); 
    } 
  }
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight); 
}