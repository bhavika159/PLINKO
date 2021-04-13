var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   

    for (var j = 50; j <=width-10; j=j+50) 

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=160; k = k + 160){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=240; k = k + 240){
    
  }
 // for (var k = 0; k <480; k = k + 480){
 //   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 // }
  //for (var k = 0; k <560; k = k + 560){
  //  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 // }
 // for (var k = 0; k <640; k = k + 640){
 //   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 // }
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,250));
  }
  //create 4th row of plinko objects
  for (var j = 25; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,325));
}
  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%10===0){
    particles.push(new Particle(random(width/2-800, width/2+800), 10,10));
    score++;
  } 
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
}