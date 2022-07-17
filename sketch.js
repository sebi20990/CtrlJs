let bubbles = [];
let nBubbles = 10;
let CanvasWidth = 600;
let CanvasHeigth = 400;
let velocity = 2;
let unicorn;

function setup() {
  createCanvas(CanvasWidth, CanvasHeigth);
  for (let index = 0; index < nBubbles; index++) {
    let _x = random(0,CanvasWidth) ;
    let _y = random(0, CanvasHeigth);
    let _r = random(5,50);
    let _v = random(5,15)/_r;
    bubbles[index] = new Bubble(_x,_y,_r,CanvasWidth,CanvasHeigth,_v);
  }
}

function draw() {

  background(0);

  for(let bubble of bubbles){
    bubble.move();
    bubble.checkBounds();
    bubble.show();
    for (let other of bubbles){
      if ( bubble !== other && bubble.intersects(other)){
      }
    }
  }

}