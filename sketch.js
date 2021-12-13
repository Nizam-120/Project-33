var background



function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  background=loadImage("snow3.jpg")
}

function draw() {
  
  background(background);
  drawSprites();
}





