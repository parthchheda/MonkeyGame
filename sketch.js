
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1

  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  FoodGroup=createGroup()
  obstacleGroup=createGroup()
  
  p=true
}


function draw() {
background("lightblue")
  food()
  Obstacle()
  if (ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  if (FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
  }
  if (obstacleGroup.isTouching(monkey)){
    p=false
    banana.velocityX=0
    obstacle.velocityX=0
    monkey.scale=0
    banana.lifetime=-2
    obstacle.lifetime=-2
  }
  score=Math.ceil(frameCount/frameRate())
  text("Score:"+score,100,50)
  drawSprites()
}

function food() {
  if(frameCount%100===0&&p===true){
    y=Math.round(random(100,200))
    banana=createSprite(410,y,10,10)
    banana.velocityX=-4
    banana.addImage(bananaImage)
    banana.scale=0.075
    banana.lifetime=120
    FoodGroup.add(banana)

  }
}

function Obstacle() {
  if (frameCount%300===0&&p===true) {
    obstacle=createSprite(410,320,10,10)
    obstacle.velocityX=-4
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.15
    obstacle.lifetime=120
    obstacleGroup.add(obstacle)
  }
}


