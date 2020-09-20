const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  //createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(200,600,50,50);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    stand.display();

    drawSprites();
      
}
