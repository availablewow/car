var wall,car,carI,weight,speed;
var rating;
function preload(){
  carI = loadImage("car.png");
}
function setup() {

  createCanvas(800,400);
  wall=createSprite(700, 200, 50, 400);
  car=createSprite(100, 200, 50, 50);
  
  car.addImage("car.png",carI)
  car.debug=true;
  wall.debug=true;
  weight=Math.round(random(1500,3000));

}
function draw() {
  background("lightblue");  
 
  car.setVelocity(Math.round(random(5,13)),0);
  if(wall.x - car.x <= car.width/2 + wall.width/2){
    car.setVelocity(0,0);
    var deformation=(0.5*weight*speed*speed)/22509;
    if(deformation>180){
   wall.shapeColor= "red";
   rating="F-";
    }
    if(deformation>90&&deformation<180){
      wall.shapeColor= "yellow";
      rating="B+";
       }
       
       if(deformation<50){
       wall.shapeColor="green";
        rating="A++"
         }
  }
  drawSprites();
}