var trex,trex_Running;
var edges;
var ground;
var groundImage;
function preload(){
  trex_Running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_Running);
  trex.scale = 0.5;
  trex.x = 50;
  edges = createEdgeSprites();
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage);
  ground.x=ground.width/2;
}

function draw(){
  background("White");
  console.log(trex.y);

  ground.velocityX = -2;
  if (keyDown("space"))
  {
    trex.velocityY =-10;
  }
   if(ground.x<0)
  {
  ground.x=ground.width/2;
  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);
  drawSprites(); 
}