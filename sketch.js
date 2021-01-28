
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
//var mango1;
var world,boy;
var restraint;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1200,100,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1200,200,30);



	rock=new Rock(300,150,50,50);
	restraint = new Restraint(rock.body,{x:250,y:420});
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);
	
}

function draw() {
	console.log(rock.body.position.y)
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rock.display();
  groundObject.display();
  restraint.display();

}
function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	restraint.fly();
}

