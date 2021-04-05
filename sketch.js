var garden, garden_Image;

var catSitting_Image, cat_Sitting;
var catRunning_Image;
var catStaning_Image;

var mouseStaning_Image, mouse_Staning;
var mouseTeasing_Image;
var mouseFriend_Image;

function preload() {
    //load the images here
    garden_Image = loadImage("garden.png");
    
    catSitting_Image = loadImage("cat1.png");
    catRunning_Image = loadAnimation("cat2.png", "cat3.png");
    catStaning_Image = loadImage("cat4.png");

    mouseStaning_Image = loadImage("mouse1.png");
    mouseTeasing_Image = loadAnimation("mouse2.png", "mouse3.png");
    mouseFriend_Image = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500, 400);
    garden.addImage(garden_Image);

    cat_Sitting = createSprite(750, 620);
    cat_Sitting.addImage(catSitting_Image);
    cat_Sitting.scale = 0.1;

    mouse_Staning = createSprite(150, 620);
    mouse_Staning.addImage(mouseStaning_Image);
    mouse_Staning.scale = 0.09;

}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat_Sitting.x - mouse_Staning.x < (cat_Sitting.width - mouse_Staning.width)/2){
        cat_Sitting.addAnimation("catStanding", catStaning_Image);
        cat_Sitting.changeAnimation("catStanding");
        cat_Sitting.velocityX = 0;
        cat_Sitting.x = 200;

        mouse_Staning.addAnimation("mouseFriend", mouseFriend_Image);
        mouse_Staning.changeAnimation("mouseFriend");
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
    if(keyDown("RIGHT_ARROW")){
        mouse_Staning.addAnimation("mouseTeasing", mouseTeasing_Image);
        mouse_Staning.changeAnimation("mouseTeasing");
        mouseTeasing_Image.frameDelay = 25;
        
    }
    if(keyDown("LEFT_ARROW")){
        cat_Sitting.addAnimation("catRunning", catRunning_Image);
        cat_Sitting.changeAnimation("catRunning");
        cat_Sitting.velocityX = -3;
    }
}
