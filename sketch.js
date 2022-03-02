var trex, trex_running;
var ground
var ground_image
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(700,300)
  trex=createSprite(50,250,10,10)
  trex.addAnimation("running", trex_running);
  trex.scale=0.5
  ground=createSprite(350,280,700,15)
  ground.addImage(ground_image)
  ground.velocityX=-3
  ground.x=ground.width/2
}

function draw(){
  background("white");
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8
trex.collide(ground)

  console.log(ground.x);
if(ground.x<0){
  ground.x=ground.width/2
}
  
  

  drawSprites();
}
