var counter = 0;


function setup() {
  createCanvas(windowWidth,windowHeight)
  noCursor(0)
  frameRate(100);
  frameRate(101000)
}

var r = random(255);
var g = random(255);
var b = random(255);

function draw() {
 if(counter%50 ===0){
  r = random(255);
  g = random(255);
  b = random(255);
 }
 //background(r,g,b)
 background(0,200,55)
 stroke(random(255),random(255),random(255))
 line(0,0,mouseX,mouseY)
 line(width/2,0,mouseX,mouseY)
 line(0,height/2,mouseX,mouseY)
 line(width,height/2,mouseX,mouseY)
 line(width,0,mouseX,mouseY)
 line(width/2,height,mouseX,mouseY)
 line(0,height,mouseX,mouseY)
 line(width,height/2,mouseX,mouseY)
 line(width,height,mouseX,mouseY)
 counter += 1;
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}