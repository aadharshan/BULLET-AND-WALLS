var bullet,wall;
var speed;
var weight;
var damage=0;
var thickness;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);

  bullet.shapeColour = "white";
  thickness = random (22,83);

  wall = createSprite(1200,200,thickness,height / 2)

  wall.shapeColor = (80,80,80);


  speed = random (223,321);
  weight = random (30,52);

  bullet.velocityX = speed;


}

function draw() {
  background(255,255,255); 
  
  if (wall.x - bullet.x<= bullet.width/ 2 + wall.width /2 ){
    bullet.velocityX = 0;
    

    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if (damage>10){
      wall.shapeColor = "red";
    }
    if (damage<=10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();

}