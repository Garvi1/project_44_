
var mario;
var marioimg;
var ground;
var rand;
var i;
var g;
var s;
var bg;
var brick,coin;

function preload(){
  bg = loadImage("images/bg.jpg")
  i = loadAnimation("images/obs3.png")
  marioimg = loadAnimation("images/img1.png","images/img2.png","images/img3.png","images/img4.png","images/img5.png")
}
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background = createSprite(width/2,height/2,width,height);
  background.scale = 0.55;
  background.addImage(bg);
  mario = createSprite(40,height/2,10,10);
  mario.scale = 2
  mario.addAnimation("mario_img",marioimg)
  ground = createSprite(width/2,height-8,width,30)
  ground.visible = false;
}
 
function draw() {
  background.velocityX = -3;
  if(background.x < width/2 ){
    background.x = background.width/2
  }

  rand = random(-15,-5)
  
  if(keyDown("space")){
    mario.velocityY = rand;
    //mario.velocityX = 3;
  }
 mario.velocityY = mario.velocityY + 0.8 ;
  mario.collide(ground);
  Enemy();
  brick();
  drawSprites();
}

function Enemy(){
  if(frameCount % 227 === 0){
  var obst = createSprite(width,height-75);
  obst.velocityX = -3;
    obst.addAnimation("obstacle",i)
  console.log(obst.x);
}
}
function brick (){
  if(frameCount % 100 === 0){
  var brick  = createSprite(width,Math.round
(random(300,height,120,10)));
  brick.velocityX = -3;
    //obst.addAnimation("obstacle",i)
  //console.log(obst.x);
  }
}
