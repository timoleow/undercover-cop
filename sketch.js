var path,boy,rob1,rob2,rob3,sword;
var pathImg,boyImg,rob1Img,rob2Img,rob3Img,swordImg;
var robbersArrested = 0;
var rob1G,rob2G,rob3G,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  rob1Img = loadImage("download-_1_.png");
  rob2Img = loadImage("download.png");
  rob3Img = loadImage("images.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
rob1G=new Group();
rob2G=new Group();
rob3G=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createRob1();
    createRob2();
    createRob3();
    createSword();

    if (rob1G.isTouching(boy)) {
      rob1G.destroyEach();
      robbersArrested=robbersArrested+1;
    }
    else if (rob2G.isTouching(boy)) {
      rob2G.destroyEach();
      robbersArrested=robbersArrested+1;
      
    }else if(rob3G.isTouching(boy)) {
      rob3G.destroyEach();
      robbersArrested= robbersArrested + 1;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        // boy.addAnimation(endImg);
        boy.addAnimation("SahilRunning",endImg);
        

        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
         rob1G.destroyEach;
         rob2G.destroyEach;
         rob3G.destroyEach;
         swordGroup.destroyEach;

        
        
        rob1G.setVelocityYEach(0);
        rob2G.setVelocityYEach(0);
        rob3G.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(10);
  fill(255);
  text("Robbers Arrested: "+ robbersArrested,10,30);
  }

}

function createRob1() {
  if (World.frameCount % 200 == 0) {
  var rob1 = createSprite(Math.round(random(50, 350),40, 10, 10));
  rob1.addImage(rob1Img);
  rob1.scale=0.3;
  rob1.velocityY = 3;
  rob1.lifetime = 150;
  rob1G.add(rob1);
  }
}

function createRob2() {
  if (World.frameCount % 320 == 0) {
  var rob2 = createSprite(Math.round(random(50, 350),40, 10, 10));
  rob2.addImage(rob2Img);
  rob2.scale=0.3;
  rob2.velocityY = 3;
  rob2.lifetime = 150;
  rob2G.add(rob2);
}
}

function createRob3() {
  if (World.frameCount % 410 == 0) {
  var rob3 = createSprite(Math.round(random(50, 350),40, 10, 10));
  rob3.addImage(rob3Img);
  rob3.scale= 0.3;
  rob3.velocityY = 3;
  rob3.lifetime = 150;
  rob3G.add(rob3);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
