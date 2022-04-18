// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://chi-fung.github.io/weedtest1/';

let flippedVideo;
// To store the classification
let label = "";
let confidence = "";
let weed = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  img = loadImage('kitten.jpg');

}

function setup() {
  createCanvas(320, 500);
  // Create the video
/*   var constraints = {
	audio : false,
	video : {
		facingMode : {
			exact: "environment"
		}
	}
  }; 
  video = createCapture(VIDEO);
  video.size(320, 320);
  video.hide();*/
  img.resize(200,200);

  flippedVideo = ml5.flipImage(img)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(img, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("label:" + label + "  confidence:" + confidence + "  " + weed, width / 2, height-4);
  
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(img)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  confidence = nf(results[0].confidence, 0, 2);
	
  if(confidence>0.7){
	weed = "雜草";	
  }else{
	weed = "  ";  
  }
  
 
  classifyVideo();
}
