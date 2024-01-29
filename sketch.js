// adding a GIF to my grid 

let gif; 

function preload (){
	gif = loadImage ('assets/LinGIF.gif');
}


function setup() { // runs once 
  createCanvas(windowWidth, windowHeight);
  fill ("teal");
  strokeWeight(1);
}

function draw() { 

  background('blue');
  
  var num = 24; 
  var sideLen = windowWidth/num;
 
  for (var y  = 0; y < 2*windowHeight; y = y + sideLen){
    for (var x = 0; x < 2*windowWidth; x = x + sideLen) {
    	image(gif, x, y, sideLen, sideLen); 
    } 
  }
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight); 
}