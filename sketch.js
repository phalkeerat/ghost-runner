var tower,towerimg;
var ghost,ghostimg;
var door,doorimg;
var base,baseimg;
var DT;
var gamestate=1
var PLAY=1
var END =0

var doorgroup,basegroup,DTgroup

function preload(){
  towerimg=loadImage("tower.png")
  ghostimg=loadImage("ghost-standing.png")
  doorimg=loadImage("door.png")
  baseimg=loadImage("climber.png")
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300,0,0)
  tower.addImage(towerimg)
  tower.velocityY=2
  
  ghost=createSprite(300,300)
  ghost.addImage(ghostimg)
  ghost.scale=0.3;
  
  doorgroup=new Group();
  DTgroup=new Group();
  basegroup=new Group();

}

function draw(){
  background(0);
  if (gamestate==1){
    if(tower.y>600){
      tower.y=300
    }
    if (keyDown("space")){
      ghost.velocityY=-3
      }
      ghost.velocityY=ghost.velocityY+0.3
    
      if(keyDown("LEFT_ARROW")){
        ghost.x=ghost.x-5
      }
      if(keyDown("RIGHT_ARROW")){
        ghost.x=ghost.x+5   
      }
      doors();
      if (ghost.isTouching(DTgroup)|| ghost.y>600||ghost.y<0){
        gamestate=0
      }
      if (ghost.isTouching(basegroup)){
        ghost.velocityY=0
      }

  }
   if (gamestate===0){
     ghost.velocityY=0
     ghost.velocityX=0

     doorgroup.destroyEach();
     DTgroup.destroyEach();
     basegroup.destroyEach();
     tower.destroy();
     ghost.destroy();

     textSize(20)
     fill("pink")
     text("GAME OVER",250,200);
     text("tap            to restart",250,300)
     text("HERE",280,300)

     if ()
   }
  
  drawSprites();
}

function doors(){

  if (frameCount%120==0){
    door=createSprite(random(200,400),-40,0,0)
    door.addImage(doorimg)
    door.velocityY=3
    ghost.depth=door.depth+1
    base=createSprite(door.x,door.y+60,0,0)
    base.addImage(baseimg);
    base.velocityY=3
    DT=createSprite(base.x,base.y+10,80,5)
    DT.velocityY=3
    DT.visible=false;

    door.lifetime=220
    DT.lifetime=220
    base.lifetime=220
    doorgroup.add(door)
    DTgroup.add(DT)
    basegroup.add(base)
}
}