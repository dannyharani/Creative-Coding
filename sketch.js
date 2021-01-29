
var timerValue = 1;
let bird;
let pipes = [];
let deaths = 0;
let dead = false;


function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  setInterval(timeIt, 1000);
  
  pipes.push(new Pipe());
}

function game() {
  background(0);
  
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  }

  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].hits(bird)) {
      deaths++;
      console.log(deaths)
    }
    
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  textSize(50); 
  text(deaths, 200, 200, 200, 200)
  
  if (deaths > 110) {
    console.log("dead")
    dead = true
    return;
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue++;
  }
}

function draw() {
    
  background(0);  
  
  if (dead == false) {
    game();
  } else {
    background(0);
    textSize(50); 
    text("DEAD, please click to restart", 200, 200, 200, 200)
    }
  }

mouseClicked = function() {
    if (dead == true) {
      dead = false
      deaths = 0;
      timerValue = 1;
    }
}; 

function keyPressed() {
  if (key == ' ') {
    bird.up();

  }
}
