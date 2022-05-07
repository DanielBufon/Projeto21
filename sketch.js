
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paredeesq,parededir,bola;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var options = { isStatic :true}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   ground = Bodies.rectangle (400,680,800,30,options)
   World.add (world,ground)
	Engine.run(engine);
   paredeesq = Bodies.rectangle (500,600,20,130,options)
   World.add(world, paredeesq)
   parededir = Bodies.rectangle (600,600,20,130,options)
   World.add(world, parededir)
   bola = Bodies.circle(30,650,30)
   World.add (world,bola)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  
  drawSprites();
  rect(ground.position.x,ground.position.y,800,30)
  rect (paredeesq.position.x, paredeesq.position.y,20,130)
  rect (parededir.position.x,parededir.position.y,20,130)
  ellipse(bola.position.x, bola.position.y,30)
}

function keyPressed(){
   if (keyCode== 32){
      Matter.Body.applyForce (bola,{x:0,y:0}, {x:0.03,y:-0.02})
   }

}