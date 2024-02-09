let goop = [];
let gravity = 1.03;
//location variables, used in combination with screenWidth and screenHeight
let X = 0; 
let Y = 0;
//rgb
let r = 0;
let g = 0;
let b = 50;
//changes eye shape
let lid = 400;
let p = 0; //causes shapes to shake
let c = 0;
let range = 100; //adjusts the pupil range
//words
let n = 0;
let touch = ["yeah", "nice", "alright", "good job", "fantastic", "sure", "cool", "good", "great", "awesome"];

//tears
class Goop {
  constructor (x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
    showGoop(){
  circle(this.x, this.y, this.size)
      
    }
    dropGoop(){
    this.y = this.y * gravity;
    }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  X = windowWidth/2
  Y = windowHeight/2 -150;

}

function draw() {
  
  if (mouseIsPressed === true) {
    lid = 200;
    p = random(-5,5);
    c = 100;
    r = random(90,95);
    n = 255;
  } else {
    lid = 400;
    p = 0;
    c = 0;
    r = 0;
    n = 0;
  }
  
    //moveX lets the pupil to move.
  let moveX = constrain(mouseX, windowWidth/2 -range, windowWidth/2 +range);
  
  background(r,g,b);
  stroke(255);
  
  line(X - 200,Y,X + 200,Y);
  line(X - 200,Y - 10 + p/4,X + 200,Y - 10 + p/4);

  //eye
  noFill();
  arc(X , Y, 400, lid + p, 0, HALF_PI);
  arc(X , Y, 400, lid + p, HALF_PI, PI);
  arc(X , Y + c/10, 400, lid + p, 0, HALF_PI);
  arc(X , Y + c/10, 400, lid + p, HALF_PI, PI);
  
  arc(moveX , Y, 100 - c/4 + p, 100 -c/4, 0, HALF_PI);
  arc(moveX , Y, 100 - c/4 + p, 100 - c/4, HALF_PI, PI);
  

  let word = random(touch);
  
  noStroke();
      for (i = 0; i < goop.length; i++){
    fill(r + 10,g + 10,b + 10);
    goop[i].showGoop();
    goop[i].dropGoop();
      }

  if (mouseIsPressed === true) {
    noStroke();
  goop.push(new Goop(X + random(-40,40), Y + 90, random(50,60)))
  }
  fill (n,n,n,n);
  textSize(25);
    for (j = 0; j < 1; j++){
      text(touch[j],X-250,Y+300);
    }
}

function mouseClicked () {
  shuffle (touch, true);
  
}