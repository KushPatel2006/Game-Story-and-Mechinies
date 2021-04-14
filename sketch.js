var House1,House2,House3,House4;
var p1, p2, p3, p4, p5, p6, p7, p8;
var Covid;

function setup() {
  createCanvas(800,400);
  House1 = createSprite(100,50,200,100);
  House1.shapeColor = "white";
  House2 = createSprite(700,50,200,100);
  House2.shapeColor = "white";
  House3 = createSprite(100,350,200,100);
  House3.shapeColor = "white";
  House4 = createSprite(700,350,200,100);
  House4.shapeColor = "white";
  p1 = createSprite(90,50,20,20);
  p1.shapeColor = "blue";
  p2 = createSprite(130,50,20,20);
  p2.shapeColor = "blue";
  p3 = createSprite(690, 50, 20,20);
  p3.shapeColor = "blue";
  p4 = createSprite(740, 50,20,20);
  p4.shapeColor = "blue";
  p5 = createSprite(90,350,20,20);
  p5.shapeColor = "blue";
  p6 = createSprite(130,350,20,20);
  p6.shapeColor = "blue";
  p7 = createSprite(690, 350, 20,20);
  p7.shapeColor = "blue";
  p8 = createSprite(740, 350,20,20);
  p8.shapeColor = "blue";
  Covid = createSprite(400,200,10,10);
  Covid.shapeColor = "red";
}

function draw() {
  background(0);  
  drawSprites();
}