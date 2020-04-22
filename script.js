let img = [];
let fullSize = 875;
let each;
let fixPos;
let t = 10;
let r;


function preload() {
  for (let i = 1; i <= 5; i++) {
    img[i] = loadImage("asset/" + i + ".png");
  }
}

function setup() {
  createCanvas(fullSize + 250, 800, P2D);
  imageMode(CENTER);
  each = fullSize / 5;
}

function draw() {
  noStroke();

  fill("#E85C43" + "20");
  //fill("#f06f4f08");
  rect(0, 0, width, height);
  //background("#E85C43");

  backCircle(width / 2, height / 2, 700, 20);

  fixPos = each;
  for (let i = 5; i >= 1; i--) {
    image(
      img[i],
      fixPos + map(mouseX, 0, width, -t / i, t / i),
      height / 2 + map(mouseY, 0, height, -t * i, t * i)
    );
    //image(img[i], fixPos, height / 2 + map(mouseY, 0, height, -t * i, t * i));
    fixPos = fixPos + each;
  }

  r = Math.floor(random(1,5));
  line();
}

//Math.sin(90 * Math.PI / 180)

function backCircle(posX, posY, min, max) {
  ellipseMode(CENTER);

  push();

  translate(posX, posY);
  rotate(random(360));

  noFill();
  strokeWeight(random(0.5, 3));
  stroke(random(255, 240), random(195, 170), random(35, 7));
  ellipse(0, 0, random(min, max), random(min, max) / 2);
  noStroke();
  pop();
}

function blueLine() {
  
  
  console.log(r);
  if (r === 1) {
    
  }
}

/*
let img5;
let img4;
let img3;
let img2;
let img1;

function preload() {
  img1 = loadImage('asset/1.png');
  img2 = loadImage('asset/2.png');
  img3 = loadImage('asset/3.png');
  img4 = loadImage('asset/4.png');
  img5 = loadImage('asset/5.png');
}

*/
