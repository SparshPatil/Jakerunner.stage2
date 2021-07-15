var bg,jake;
var trackImage,jakeImage;

function preload(){
trackImage=loadImage("track.png");
jakeImage=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png");




}


function setup(){
createCanvas(1000,600);
bg = createSprite(200, 300,20,30);
bg.addImage("track",trackImage);
bg.velocityY=2;
bg.scale=1.25;
 Jake = createSprite(200, 380,20,30);
Jake.addAnimation("jake1",jakeImage);

invisibleG = createSprite(200, 580,850,20);

}

function draw() {
 background(0);
   console.log(bg.y);
  if (bg.y>300) {
     bg.y=200;
   } 
  camera.x=Jake.x;
  camera.y=Jake.y;
if (keyDown("LEFT")) {
    Jake.x=Jake.x-2;
  }
    if (keyDown("RIGHT")) {
    Jake.x=Jake.x+2;
  }
   if (keyDown("space")) {
    Jake.velocityY=-5;
  }
  Jake.velocityY=Jake.velocityY+0.9;
 Jake.collide(invisibleG);
  
  drawSprites();
}
