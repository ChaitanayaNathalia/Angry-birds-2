const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 580, 60, 60);
    box2 = new Box(900, 580, 60, 60);
    pig1 = new Pig(800, 580);
    ground1 = new Ground(600, 590, 1200, 20);
    log1 = new Log(800, 500, 300, PI/2)
    box3 = new Box(700, 450, 60, 60);
    box4 = new Box(900, 450, 60, 60);
    pig2 = new Pig(800, 450);
    log2 = new Log(800, 380, 300, PI/2)
    box5 = new Box(800, 350, 60, 60);
    bird1 = new Bird(100, 100);
    log3 = new Log(750, 250, 150, PI/7)
    log4 = new Log(850, 250, 150, -PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    pig1.display();
    ground1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    bird1.display();
    log3.display();
    log4.display();
}