const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var pendulum,target;
var chain;
function setUp (){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    target = new Target (230,180,80,PI/2);
    pendulum = new Pendulum(200,200,50);
    chain = new Chain(bird.body,target.body);

    

}

function draw (){
    Engine.update (engine);
    background(0,0,0);
    target.display();
    pendulum.display();
    chain.display();
}