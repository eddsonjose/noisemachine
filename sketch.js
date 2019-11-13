//Noise Machine
//by Eddson Jose
//-----------------------------------------------------------------------------
//Sound
let synth1, mic, vol, env, noise, autoFilter, counter = 0;
//Face Detection
var capture, tracker, faceSize, faceWidth, faceNumber;
//-----------------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  //Sound
  noise = new Tone.Noise({
    "type":"brown",
    "playbackRate":1,
    "volume":0.01
  })
  autoFilter = new Tone.AutoFilter({
  	"baseFrequency":faceWidth,
    "depth":0.2,
    "frequency":0
  }).connect(Tone.Master);
  noise.connect(autoFilter);
  //Face Detection
  capture = createCapture({audio: false,video: {width: windowWidth,height: windowHeight}}, function() {console.log('capture ready.')});capture.elt.setAttribute('playsinline', '');
  capture.size(640, 480);
  capture.hide();

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
  rect(0, 0, width, height);
  // mic = new p5.AudioIn();
  // mic.start();
}
//-----------------------------------------------------------------------------
function draw() {
  background(30, 40, 90, 10);
  noStroke();
  fill(255);
  counter++;
  rect(random(0, width), random(0, height), faceNumber/9, faceNumber/9);
  rect(random(0, width), random(0, height), 2, 2);
  //face detection
  image(capture, 0, 0, 640, 480);
    var positions = tracker.getCurrentPosition();
  //face detection visualizer
  noFill();
  stroke(255);
  beginShape();
  for (var i = 0; i < positions.length; i++) {
    vertex(positions[i][0], positions[i][1]);
  }
  endShape();
  noStroke();
  for (var i = 0; i < positions.length; i++) {
    fill(map(i, 0, positions.length, 0, 360), 50, 100);
    ellipse(positions[i][0], positions[i][1], 4, 4);
    text(i, positions[i][0], positions[i][1]);
  }
  // estimate face size through distance of edges of face
  if (positions.length > 0) {
    var mouthLeft = createVector(positions[0][0], positions[0][1]);
    var mouthRight = createVector(positions[14][0], positions[14][1]);
    faceSize = mouthLeft.dist(mouthRight)/2;
    rect(20, 20, faceSize, 20);
    // console.log(autoFilter.baseFrequency);
    faceNumber = int(faceSize);
    if (faceNumber >= 81) {
      faceWidth = 800;
    }
    if (faceNumber <= 80) {
      faceWidth = 80;
    }
    noise.start();
    autoFilter.start()
  }
  console.log(faceWidth);
}
//-----------------------------------------------------------------------------
function mousePressed() {
  // noise.mute = false;
}

//Count then change value of face width
// if (counter >= 10) {
//   // ellipse(width/2, height/2, faceSize, faceSize);
//   sound();
//   counter = 0;
//
//   if (faceSize >= 100) {
//     faceWidth = 200;
//   }
//   if (faceSize <= 99) {
//     faceWidth = 80;
//   }
//   console.log(faceSize);
// }

//Get volume of mic
// function sound() {
//   vol = mic.getLevel() * 100000;
// }

//P5.Sound
// noise = new p5.Noise("brown");
// noise.start();
// noise.amp(0.5);
// env = new p5.Env();
// set attackTime, decayTime, sustainRatio, releaseTime
// env.setADSR(0.001, 0.1, 0.2, 0.9);
// set attackLevel, releaseLevel
// env.setRange(5, 0);
// p5.Amplitude will analyze all sound in the sketch
// unless the setInput() method is used to specify an input.
// analyzer = new p5.Amplitude();
