let img = [];
let fullSize = 875;
let each;
let fixPos;

function preload() {
  for (let i = 1; i <= 5; i++) {
    img[i] = loadImage("asset/" + i + ".png");
  }
}

function setup() {
  createCanvas(fullSize+250, 800);
  background("#E85C43");
  imageMode(CENTER);
  each = fullSize / 5;
}

function draw() {
  background("#E85C43");
  fixPos = each;
  for (let i = 5; i >= 1; i--) {
      image(img[i], fixPos, height / 2 + map(mouseY, 0, height, -height/2, height/2));
   
    //console.log(mouseY);
    fixPos = fixPos + each;
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
