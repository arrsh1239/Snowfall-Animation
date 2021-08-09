var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  function preload() {
    backgroundImg = loadImage("snow3.jpg");
}

var snow = [];
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  snow1 = new Snow(100,20)
  snow2 = new Snow(200,-20)
  snow3 = new Snow(300,-10)
  snow4 = new Snow(400,-50)
  snow5 = new Snow(500,0)
  snow6 = new Snow(600,10)
  snow7 = new Snow(700,-70)
  snow8 = new Snow(800,-100)
  snow9 = new Snow(900,0)

}

function draw() {
  background(backgroundImg);
  textSize(20)
 
  Engine.update(engine);
  ground.display(); 
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
}