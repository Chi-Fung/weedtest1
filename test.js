
let img;

function preload() {
 
  img = loadImage('kitten.jpg');

}

function setup() {
  createCanvas(500, 500);
  image(img, 0, 0);

}