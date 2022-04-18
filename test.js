
let img;

function preload() {
 
  img = loadImage('IMG_0514.JPG');

}

function setup() {
  createCanvas(500, 500);
  img.resize(300,400);
  image(img, 0, 0);

}
