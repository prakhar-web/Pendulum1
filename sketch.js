const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ConstraintLog = new Log(200,200,70,PI/2);
   

    ball1 = new Ball(200,150,30,30);
    chain1 = new Chain(ball1.body,ConstraintLog.body);
}
    
function draw(){
    ball1.display();
    ConstraintLog.display();
}