var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 100);
  fixedrect.shapeColor = "green";
  fixedrect.debug = "true";
movingrect = createSprite(300,150,50,100);
movingrect.shapeColor = "green"
movingrect.debug = "true";
}

function draw() {
  background(255,255,255);
  movingrect.y = mouseY;
  movingrect.x = mouseX;

if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
  fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
  movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
  fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
movingrect.shapeColor = "blue";
fixedrect.shapeColor = "blue";
}else{
  movingrect.shapeColor = "aqua";
  fixedrect.shapeColor = "aqua";
}


  

  drawSprites();
}