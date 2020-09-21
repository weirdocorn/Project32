const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand, polygon, slingShot;
var box1, box2, box3, box4, box5;
var box6, box7, box8, box9;
var box10, box11, box12;
var box13, box14;
var bax15;
var score = 0;

var gameState = "onSling";

function preload(){
  hexagon = loadImage("image(hexagon).png");
}

function setup() {
  createCanvas(800,400);
  
  ground = new Ground(400, 380, 802, 10);
  stand = new Ground(650, 370, 100, 5);

  //layer five
  box1 = new Box(610, 350, 10, 10);
  box2 = new Box(630, 350, 10, 10);
  box3 = new Box(650, 350, 10, 10);
  box4 = new Box(670, 350, 10, 10);
  box5 = new Box(690, 350, 10, 10);

  //layer four
  box6 = new Box(620, 330, 10, 10);
  box7 = new Box(640, 330, 10, 10);
  box8 = new Box(660, 330, 10, 10);
  box9 = new Box(680, 330, 10, 10);

  //layer three
  box10 = new Box(630, 310, 10, 10);
  box11 = new Box(650, 310, 10, 10);
  box12 = new Box(670, 310, 10, 10);

  //layer two
  box13 = new Box(640, 290, 10, 10);
  box14 = new Box(660, 290, 10, 10);

  //layer one
  box15 = new Box(650, 270, 10, 10);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon, {x:100, y:200});
}

function score(box){
  if(box.visibility < 0 && box.visibility >- 105){
    score = score+1;
  }
}

function draw() {
  background(255,255,255);  

  text("score: "+score,750,40);

  ground.display();
  stand.display();
  box1.dispay();
  box2.display();
  box3.dispay();
  box4.display();
  box5.dispay();
  box6.display();
  box7.dispay();
  box8.display();
  box9.dispay();
  box10.display();
  box11.dispay();
  box12.display();
  box13.dispay();
  box14.display();
  box15.dispay();
  polygon.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  
  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}