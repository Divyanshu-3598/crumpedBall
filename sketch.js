
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	ball = new Paper(100,600,3,);
	ground = new Ground(600,height,1200,20);
    dustbin1 = new Dustbin(700,650,15,75);
    dustbin2 = new Dustbin(735,650,75,15);
    dustbin3 = new Dustbin(770,650,15,75);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
    ball.display();
    ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();




}



