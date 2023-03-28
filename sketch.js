
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;

var rect,rect1,rect2,rect3;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };
  ground = Bodies.rectangle(0,400,400,20,ground_options);
 World.add(world,ground); 
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);  

 rect = new Ground(50,370,50,30);
 rect1 = new Ground(150,370,50,30);
 //Nas duas linhas acima, você esta criando um objeto da classe Ground, crie o seguinte:
 //objeto rect2 com 250,370,50,30
 //objeto rect 3 com 350,370,50,30
 //???


 //Utilize 'Bodies.circle' para criar um corpo circular para a bola
  ball = ???(200,200,20,ball_options);
  //Adicione a bola ao mundo
 ???(world,ball);

    rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,750,20);
 rect.show();
 rect1.show();
 //Nas linhas acima, você esta mostrando na tela os objetos da class Ground, faça o mesmo com os objetos rect2 e rect3
 //???
  Engine.update(engine);
}


function vForce()
{
  //Utilize o código ' Matter.Body.applyForce' para aplicar força em uma bola
  ???(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


