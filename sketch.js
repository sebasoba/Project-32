function setup() {
  ball = new Ball(600,height,1200,20);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createSprite(400, 100, 50, 50);
  createSprite(400, 300, 50, 50);
  createSprite(500, 250, 50, 50);
  createSprite(500, 150, 50, 50);
  createSprite(600, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  ball.display();
  drawSprites();
}