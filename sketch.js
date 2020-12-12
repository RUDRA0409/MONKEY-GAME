var bananaImage, banana, bananaGroup;
var obstacle, obstacleGroup, obstacle_img;
var backImage, background_img;
var invisibleGround;
var Monkey, Monkey_running;
var rand;
var score;

function preload()
{
  backImage = loadImage("jungle.jpg");
  Monkey_running= loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  background_img = createSprite(250, 160, 50, 40);
  background_img.addImage(backImage);
  background_img.velocityX = -2;
  background_img.scale = 1.2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.velocityX = -2;
  invisibleGround.visible = false;
  
  
  Monkey = createSprite(50,180,20,50);
  Monkey.addAnimation("running", Monkey_running);
  Monkey.scale = 0.1;
  
  rand = random(10, 60);
  
  score = 0;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  
  score = score + Math.round(getFrameRate()/60);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500, 50);
  
  
  if (background_img.x < 0){
    background_img.x = background_img.width/2;
  }
  
  if (invisibleGround.x < 0){
      invisibleGround.x = invisibleGround.width/2;
    }
  
  if(keyDown("space") && Monkey.y >= 161){
      Monkey.velocityY = -12 ;
    }
  
  
  Monkey.velocityY = Monkey.velocityY + 0.8;
  
  if(obstacleGroup.isTouching(Monkey))
  {
    Monkey.scale = 0.2
  }
  
  
  switch(rand) {
      case 10 : Monkey.scale = 0.12;
      break;
      
      case 20 : Monkey.scale = 0.14;
      break;
      
      case 30 : Monkey.scale = 0.16
      break;
      case 40 : Monkey.scale = 0.18
      break;
      
      case 50 : Monkey.scale = 0.12;
      break;
      
      case 60 : Monkey.scale = 0.12;
      break;
      
      default: break;
    }
  
  Monkey.collide(invisibleGround);
  drawSprites();
}