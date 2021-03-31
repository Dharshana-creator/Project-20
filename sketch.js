var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;
var bg, canvas;



function preload() {
 bg = loadImage("images/garden.png");
 catImg1 = loadImage("images/cat1.png");
 catImg2 = loadImage("images/cat2.png");
catImg3 = loadImage("images/cat3.png");
catImg4 = loadImage("images/cat4.png");
mouseImg1 = loadImage("images/mouse1.png");
mouseImg2 = loadImage("images/mouse2.png");
mouseImg3 = loadImage("images/mouse3.png");
mouseImg4 = loadImage("images/mouse4.png");

function setup(){
    canvas = createCanvas(1000,800);
cat = createSprite(870,600);
cat.addAnimation("catSleeping", catImg1);
cat.scale = 0.2;
mouse = createSprite(200,600);
mouse.addAnimation("mouseStanding", mouseImg1);
mouse.scale = 0.15;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
cat.velocityX = 0
cat.addAnimation("catLastImage", catImg3);
cat.x = 300;
cat.scale = 0.2;
cat.changeAnimation("catLastImage");
mouse.addAnimation("mouseLastImage", mouseImg3);
mouse.scale = 0.15;
mouse.changeAnimation("mouseLastImage");
}
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("catRunning", catImg2);
cat.changeAnimation("catRunning");
mouse.addAnimation("mouseTeasing", mouseImg2);
mouse.frameDelay = 25;
mouse.changeAnimation("mouseTeasing");
}


}
}