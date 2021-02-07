const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var PhyEngine, world;
var object;

function setup() {
  createCanvas(400,400);
   object = new Box()
   PhyEngine = Engine.create();
   world = PhyEngine.world;

}

function draw() {
  background(0);  
  Engine.update(PhyEngine);
  object.display();
 
}