
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyimg,tree,treeimg

function preload()

boy = loadImage('sprites/wood1.png');
{
	
}

function setup() {

	createCanvas(800, 700);

	boy = createSprite(100, 500, 20, 20);
	boy.shapeColor = 'red'


	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display
  
  drawSprites();
 
}



