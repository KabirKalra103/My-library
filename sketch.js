var movingRect, fixedRect;
var fixedRect2,fixedRect3;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 50, 30);
  movingRect = createSprite(200, 200, 40, 80);
 fixedRect2 = createSprite(600,100,50,30);
 fixedRect3 = createSprite(600,300,50,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect3.shapeColor="green";
  fixedRect2.shapeColor="green";
fixedRect2.debug=true;
fixedRect3.debug=true;
  fixedRect.debug = true;
  movingRect.debug = true;
  movingRect.velocityX=2;
  fixedRect2.velocityY=2;
  fixedRect3.velocityY=-2;
}

function draw() {
  background(0); 
  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(isTouching(fixedRect,movingRect) ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
   
  } else if(isTouching(fixedRect2,movingRect) ){
    fixedRect2.shapeColor = "red";
    movingRect.shapeColor = "red";
    
  } else if(isTouching(fixedRect3,movingRect) ){
    fixedRect3.shapeColor = "red";
    movingRect.shapeColor = "red";
    
  } 
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor="green";
    fixedRect3.shapeColor="green";
  }
 bounceOff(movingRect,fixedRect);
 bounceOff(fixedRect3,fixedRect2);
  drawSprites();
}
