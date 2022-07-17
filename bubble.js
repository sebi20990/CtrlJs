class Bubble{

  constructor(x,y,r,w,h,vel){
    this.x = x;
    this.y = y;
    this.r = r;
    this.velx = vel;
    this.vely = vel;
    this.CanvasWidth = w;
    this.CanvasHeigth = h;
    this.color = [0,0,0];
  }

  checkBounds(){
    if (this.x + this.r >= this.CanvasWidth || this.x - this.r <= 0){
      this.velx = -this.velx;
    }
    if (this.y + this.r >= this.CanvasHeigth || this.y - this.r <= 0){
      this.vely = -this.vely;
    }
  }

  intersects(other){
    let distance = dist(this.x, this.y, other.x, other.y)
    return (distance < this.r + other.r);
  }

  move(){
    this.x = this.x + random(-1,1)*0 + this.velx;
    this.y = this.y + random(-1,1)*0 + this.vely;
  }

  show(){
    stroke(255);
    strokeWeight(4);
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r)
  }

  changeColor(){
    this.color = [50,230,216];
  }

  }