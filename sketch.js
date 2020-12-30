var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,800);

  speed = random(90,180);
  weight = random(400,1500);

  car = createSprite(50,400,30,30);
  car.shapeColor= "white";
  //car.debug = true;
  wall = createSprite(1550,400,50,height/2);
  wall.shapeColor= "gray";
  //wall.debug = true;
  
}

function draw() {
  background("black");  

  car.velocityX = speed;

  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;

    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor =color(0,255,0);
    }
    if(deformation <= 180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<=100){
      car.shapeColor = color(255,0,0);
    }
  }
 
  drawSprites();
}

 