var player; 
var player_img, bubble_img, bullet_img;
var bullet, bubble1;
var random1;
var bulletGroup;
var bubbleGroup;
function preload()
{
    player_img = loadImage("player.png");
    bubble_img = loadImage("1.png");
    bullet_img = loadImage("bullet.png");
}
function setup()
{
    createCanvas(400,400);
    player = createSprite(200,370,20,20);
    player.addImage(player_img);
    player.scale = 0.3;
    bulletGroup=new Group();
    bubbleGroup= new Group();   
}
function draw()
{

  
    background(0);
    player.x = mouseX;
    if(keyWentDown("space"))
  {
    bullet = createSprite(player.x,375,10,10);
    bullet.addImage(bullet_img);
    bullet.scale = 0.08;
    bullet.setVelocity(0,-8);
    bulletGroup.add(bullet);
  }
    if(World.frameCount%60 === 0)
  {
    random1 = Math.round(random(10,380));
    bubble1 = createSprite(random1,65,10,10);
    bubble1.addImage(bubble_img);
    bubble1.scale = 0.2;
    bubble1.setVelocity(0,2);
    bubbleGroup.add(bubble1);
  }
  for(var i=0;i<bubbleGroup.length;i++)
  {
    if(bulletGroup.isTouching(bubbleGroup))
    {
      bubbleGroup.get(i).destroy();
    }
    else
    {

    }
  }
console.log(bubbleGroup.length);
    drawSprites();
}