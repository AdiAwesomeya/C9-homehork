
function setup() {
  createCanvas(400,400);
  background("yellow")
  var box = createSprite(200, 200, 30, 30)
}

function draw() {
if(keyIsDown(RIGHT_ARROW)){
  background("red");
}
drawSprites();
}




