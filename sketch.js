const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;



var ground01,ground02;
var block01
   var block02;
   var block03;
   var block04;
   var block05;
   var block06;
   var block07;
   var block08;
   var block09;
   var block10;
   var block11;
   var varblock12;
   var block13;
   var block14,block15,block16;
 var block18;  
 var block19;
var block20;
var block21;
var block22;
var block23;
 var block2;  
var block25;
var block26;
var rock;
var slingShot;
var rock_img


function preload(){

   rock_img=("polygon.png");

}


function setup(){
   
    
    createCanvas(displayWidth,displayHeight);


    engine=Engine.create();
    world=engine.world
    

    ground01=new Ground(390,300,250,10);
    ground02=new Ground(700,200,200,10);

 block01= new Box(330,235,30,40);
block02= new Box(360,235,30,40);
block03= new Box(390,235,30,40);
block04= new Box(420,235,30,40);
block05= new Box(450,235,30,40);
block06= new Box(360,195,30,40);
block07= new Box(390,195,30,40);
block08= new Box(420,195,30,40);
block09= new Box(390,155,30,40);
block10= new Box(420,265,30,40);
block11= new Box(450,265,30,40);
block12= new Box(480,265,30,40);
block13= new Box(360,265,30,40);
block14= new Box(390,265,30,40);
block15= new Box(330,265,30,40);
block16= new Box(300,265,30,40);
block18=new Box(685,100,30,40);
 block19=new Box(670,135,30,40);
 block20=new Box(700,135,30,40)
 block21=new Box(730,170,30,40)
 block22=new Box(700,170,30,40);
 block23=new Box(670,170,30,40);
 block24=new Box(640,170,30,40);


rock=Bodies.circle(50,200,20);
World.add(world,rock)

slingShot=new SlingShot(this.rock,{x:100,y:200})

}





function draw(){
background("black")
Engine.update(engine)

   ground01.display();
   ground02.display(); 

   block01.display();
block02.display();
block03.display();
block04.display();
block05.display();
block06.display();
block07.display();
block08.display();
block09.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();



   
   slingShot.display();
ellipse(rock.position.x,rock.position.y,50,50)
}


function mouseDragged(){

   Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY})
}


function mouseReleased(){
slingShot.fly();


}