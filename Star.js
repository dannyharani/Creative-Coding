function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(0, width);

  this.update = function(){
    this.z = this.z - speed;
    
    if (this.z < 1) {
        this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(0, width);
    }

  }
  
  this.show = function(){
  
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  var sx = map(this.x / this.z, 0, 1, 0, width);
  var sy = map(this.y / this.z, 0, 1, 0, height);

  var r = map(this.z, 0, width, 16, 0); 

  ellipse(sx, sy, r,r);
  }
}
