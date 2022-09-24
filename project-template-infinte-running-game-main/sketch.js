var skyImg,sky;
var armyImg,army;
var showArmyImg,showArmy;
var groundImg,ground;

var ground2

var enemyImg,enemy,enemyGroup;
var enemy2Img,enemy2,enemy2Group;

function preload(){
skyImg = loadImage("armySky.png")
groundImg= loadImage("ground.png")

showArmyImg = loadImage("army12.png")
armyImg = loadAnimation("army1.png","army2.png","army3.png","army4.png","army5.png","army6.png","army7.png","army8.png","army9.png","army10.png","army11.png","army12.png","army13.png","army14.png","army15.png","army16.png","army17.png","army18.png")


enemyImg = loadImage("enemy.png")
enemy2Img = loadImage("enemy2.png")

}

function setup() {
    createCanvas(windowWidth,windowHeight);

    sky = createSprite(width/2,50,1200,800);
    sky.addImage(skyImg);

ground  = createSprite(375,450)
ground.addImage(groundImg)

ground2=createSprite(1127,447)
ground2.addImage(groundImg)


showArmy = createSprite(130,450)
showArmy.addImage(showArmyImg)

army = createSprite(300,450)
army.addAnimation("hello",armyImg)
army.visible= false



}

function draw() {

if(keyDown("RIGHT_ARROW")){
    showArmy.visible=false
    army.x = army.x +7
    army.visible=true
}


pok()
china()

drawSprites()
}


function pok(){
    if(frameCount%160===0){
  
      //giving random x and y positions for zombie to appear
      enemy = createSprite(1120,450,40,40)
      
      enemy.addImage(enemyImg)
     enemy.scale = 0.4
      enemy.velocityX = -3
     
      enemy.lifetime = 400
     
    }
  
  }
  

  function china(){
    if(frameCount%279===0){
  
      //giving random x and y positions for zombie to appear
      enemy2 = createSprite(1120,450,40,40)
      
      enemy2.addImage(enemy2Img)
     enemy2.scale = 0.3
      enemy2.velocityX = -3
     
      enemy2.lifetime = 400
     
    }
  
  }