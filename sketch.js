
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var radius,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	desity:1.2
	}
	
	ball=Bodies.circle(250,100,40/2,ball_options)
	World.add(world,ball)

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);
 
  ground.display();
  leftSide.display();
  rightSide.display();
}

function keypressed(){
	if (keycode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); 
	}
 }
	


