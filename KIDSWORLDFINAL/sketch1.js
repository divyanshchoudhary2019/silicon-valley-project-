var bg;
var basketImg;
var egg;
var eggImg;
var eggImg2;

var eggs=[];
var eggGroup;
var score=0
var missed=0;
function preload(){
  bg=loadImage("images/gro.png")  
 basketImg=loadImage("images/eggbasket.png")  
 eggImg=loadImage("images/egg.png")
 eggImg2=loadImage("images/egg_broken.png")
}
function setup (){
    createCanvas(displayWidth-100,displayHeight-100);
    basket=createSprite(500,700);
   basket.addImage(basketImg);
   basket.debug=true;
   basket.setCollider("rectangle",0,0,basket.width-60,50)
  
   ground=createSprite(displayWidth/2,displayHeight-120,displayWidth,20);
   ground.shapeColor="red"
  
   eggGroup=new Group();
   eggBroken=createSprite(100,displayWidth-130);
   eggBroken.addImage("egg2",eggImg2);
   eggBroken.visible=false;
}
function draw (){
  
    background(bg);
 
    basket.x=mouseX;
    basket.scale=0.5;
    if(frameCount %100===0)
    spawnEggs();
    //drawSprites();
    textSize(30);
   
   fill ("red");
    
   
    for(i=0,flag=0;i<eggs.length;i++)
     {
       if(eggs[i].isTouching(ground))
        {
         var tp = eggs[i].y  
         text(eggs[i].y,200,100)  
        eggs[i].visible=false;
       
        eggBroken.x= eggs[i].x;
        eggBroken.y= eggs[i].y;
        eggs[i].velocityY=0;
        eggBroken.scale=0.3;
        eggBroken.visible=true;
       
          if(eggs[i].y===tp )  
           {
            missed++;
            eggs[i].velocityY=0
            eggs[i].y+=1
            eggs[i].destroy();
            }
        }
        else if(eggs[i].isTouching(basket))
        {
            eggs[i].visible=false;
            text(eggs[i].y,500,100);
            eggs[i].velocityY=0;
           
            if(eggs[i].y===648)  
             {
              score++;
              eggs[i].y=649
           
             }
        }
        else{
            continue;
        }
}
text("catched"+score,1100,50);
 text("missed"+missed,1100,100);
 drawSprites();
}
function spawnEggs()
{
    egg=createSprite(200,165,50,50);
   egg.addImage("egg1",eggImg);
  
    egg.visible=true;
    eggGroup.add(egg);
    eggs.push(egg);
    var rand=Math.round(random(1,4)); 
    egg.velocityY=+3;
    egg.scale=0.1;
   i++;
    switch(rand){
        case 1:
        egg.x=316;
        break;

        case 2:
        egg.x=556;
        break;

        case 3:
        egg.x=800;
        break;

        case 4:
        egg.x=1034;
        break;

    }



}





