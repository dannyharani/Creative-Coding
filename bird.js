function Bird() {
  
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.678;
  this.lift = -11;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    fill(0, 0, 0);


fill(255, 0, 0);
    
rect(this.x, this.y-16,  14, 14);
rect(this.x+17, this.y-16, 14, 14);
rect(this.x+34, this.y-16, 14, 14);
rect(this.x, this.y-32, 14, 14);
rect(this.x+17, this.y-32, 14, 14);
rect(this.x+34, this.y-32, 14, 14);
rect(this.x, this.y-48, 14, 14);
rect(this.x+17, this.y-48, 14, 14);
rect(this.x+34, this.y-48, 14, 14);
    scale(0.5, 0.5)
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;

    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
