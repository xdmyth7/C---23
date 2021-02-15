
//Namespacing means making the command shorter
// const means constant value
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var box1, box2, ground;

function setup() {
  createCanvas(400,400);

  engine  = Engine.create();
  world  = engine.world;
  
  box1 = new Box(200, 300, 50, 50);
  box2 = new Box(240, 100, 50, 100);
  
  ground = new Ground(200, 390, 400, 20);

}

function draw() {
  background(0);  
  //Without this command the block will not be able to move because you have to mention it in the funtion draw
  Engine.update(engine);
 
 box1.display();
 box2.display();

 ground.display();
}







