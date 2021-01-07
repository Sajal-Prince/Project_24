const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var dustbinImg,dustbin;

function preload(){
    dustbinImg = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    dustbin = createSprite(963,505,20,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.53;

    dustbinPartLeft = new Dustbin(902,505,10,120);
    dustbinPartMiddle = new Dustbin(962,565,130,10);
    dustbinPartRight = new Dustbin(1024,505,10,120);
}

function draw(){
    background("gray");
    Engine.update(engine);

    ground.display();
    crumpledPaper.display();
    dustbinPartLeft.display();
    dustbinPartMiddle.display();
    dustbinPartRight.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}
