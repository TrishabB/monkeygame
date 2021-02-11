
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 FoodGroup= new Group();
  obstacleGroup= new Group();
 
}



function setup() {
  monkey=createSprite(80,320,20,20)
 monkey.addAnimation("monkey",monkey_running)

  
  
}


function draw() {
background("white")
   stroke("white")
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50)
  
  stroke("black")
textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivaltime,100,50)
  monkey.scale=0.1
  ground=createSprite(200,350,900,10)
  ground.velocityX=-2
  ground.x=ground.width/2
  //console.log(ground.x)
  
  
  if(keyDown("space")&& monkey.y>=159){
      
    monkey.velocityY=-13
 
  }
   monkey.velocityY= monkey.velocityY+0.8
  monkey.collide(ground)
    if(frameCount%80==0){
  banana=createSprite(250,500,20,20)
  banana.addAnimation("banana",bananaImage)
    banana.y=Math.round(random(200,130))
  banana.scale=0.1
    banana.velocityX=-3
    banana.lifetime=90;
    banana.depth = monkey.depth;
    monkey.depth = banana.depth + 1;
    FoodGroup.add(banana)
  }
       var obstacle=createSprite(500,334,10,40)
obstacle.scale=0.1
 
obstacle.velocityX=-5
  obstacle.lifetime=100;
  var rand = Math.round(random(1,40 ))
  switch(rand){
    case 1:obstacle.addImage(obstacleImage)
      break;
      default: break;
      
      
      
      
      obstacleGroup.add(obstacle)
      FoodGroup.add(banana)
      
   monkey.collide(ground)   
  }
   
drawSprites()

  
   
   
  
}
 function spawnobstacles(){
   
 }  
     
  
  

