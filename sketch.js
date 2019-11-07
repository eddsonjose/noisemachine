//Noise Machine
//by Eddson Jose
let synth = new Tone.Synth() .toMaster();
let div0, div1, div2;
let keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, keySemicolon;
let capture;
let tracker
let w = 640,
    h = 480;

//-----------------------------------------------------------------------------
function setup() {
  noCanvas();
  //---------------------------------------------------------
  capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();
    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
  //---------------------------------------------------------
  // createCanvas(windowWidth, windowHeight);
  // background(100);
  div0 = createDiv(); div0.class('keyboard');
  div1 = createDiv(); div1.class('key'); div0.child(div1);
  keyA = createButton('A'); keyA.class('button'); keyA.mousePressed(kA); div1.child(keyA);
  keyS = createButton('S'); keyS.class('button'); keyS.mousePressed(kS); div1.child(keyS);
  keyD = createButton('D'); keyD.class('button'); keyD.mousePressed(kD); div1.child(keyD);
  keyF = createButton('F'); keyF.class('button'); keyF.mousePressed(kF); div1.child(keyF);
  keyG = createButton('G'); keyG.class('button'); keyG.mousePressed(kG); div1.child(keyG);
  keyH = createButton('H'); keyH.class('button'); keyH.mousePressed(kH); div1.child(keyH);
  keyJ = createButton('J'); keyJ.class('button'); keyJ.mousePressed(kJ); div1.child(keyJ);
  keyK = createButton('K'); keyK.class('button'); keyK.mousePressed(kK); div1.child(keyK);
  keyL = createButton('L'); keyL.class('button'); keyL.mousePressed(kL); div1.child(keyL);
  keySemicolon = createButton(';'); keySemicolon.class('button'); keySemicolon.mousePressed(kSemicolon); div1.child(keySemicolon);
}
//-----------------------------------------------------------------------------
function draw() {
  // fill(0);
  // text("Use the keyboard keys: ASDFGHJKL;", width/2 - 100, height/2);
  image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();
    noStroke();
    // for (var i = 0; i < positions.length; i++) {
    //     fill(map(i, 0, positions.length, 0, 360), 50, 100);
    //     ellipse(positions[i][0], positions[i][1], 4, 4);
    //     text(i, positions[i][0], positions[i][1]);
    // }
    //ellipse for face---------------------------------
    stroke(0);
    strokeWeight(1);
    fill(200);
    ellipse(320, 240, 170, 230);
    //play sound when smiling--------------------------
    // if (positions.length > 0) {
    //    var mouthLeft = createVector(positions[44][0], positions[44][1]);
    //    var mouthRight = createVector(positions[50][0], positions[50][1]);
    //    var smile = mouthLeft.dist(mouthRight);
    //
    //    rect(20, 20, smile * 3, 20);
    //    if (smile >= 70) {
    //      synth.triggerAttackRelease("E4", 0.3);
    //    }
    //  }
    // play sound when eyebrows are raised--------------
    if (positions.length > 0) {
       var eyebrowLeft = createVector(positions[16][0], positions[16][1]);
       var eyeLeft = createVector(positions[32][0], positions[32][1]);
       var eyebrowLifted = eyebrowLeft.dist(eyeLeft);

       var mouthLeft = createVector(positions[47][0], positions[47][1]);
       var mouthRight = createVector(positions[53][0], positions[53][1]);
       var smile = mouthLeft.dist(mouthRight);
       var smileMult = 1;

       noStroke();
       fill(255);
       ellipse(positions[70][0], positions[70][1], eyebrowLifted * 2, eyebrowLifted * 2);
       ellipse(positions[66][0], positions[66][1], eyebrowLifted * 2, eyebrowLifted * 2);
       fill(0);
       ellipse(positions[32][0], positions[32][1], 15, 15);
       ellipse(positions[27][0], positions[27][1], 15, 15);
       rect(20, 40, eyebrowLifted * 3, 20);
       ellipse(positions[57][0], positions[57][1], smile * 2, smile / smileMult);

       if (eyebrowLifted >= 35) {
         synth.triggerAttackRelease("C6", 0.3);
       }

       rect(20, 20, smile * 3, 20);
       if (smile >= 30) {
         synth.triggerAttackRelease("C4", 0.3);
         smileMult = 5;
       }
     }
}
//-----------------------------------------------------------------------------
function kA() {synth.triggerAttackRelease("C3", 0.3);}
function kS() {synth.triggerAttackRelease("D3", 0.3);}
function kD() {synth.triggerAttackRelease("E3", 0.3);}
function kF() {synth.triggerAttackRelease("F3", 0.3);}
function kG() {synth.triggerAttackRelease("G3", 0.3);}
function kH() {synth.triggerAttackRelease("B3", 0.3);}
function kJ() {synth.triggerAttackRelease("C4", 0.3);}
function kK() {synth.triggerAttackRelease("D4", 0.3);}
function kL() {synth.triggerAttackRelease("E4", 0.3);}
function kSemicolon() {synth.triggerAttackRelease("F4", 0.3);}
//-----------------------------------------------------------------------------
function keyTyped() {
  if (key === 'a') {synth.triggerAttackRelease("C3", 0.3);}
  if (key === 's') {synth.triggerAttackRelease("D3", 0.3);}
  if (key === 'd') {synth.triggerAttackRelease("E3", 0.3);}
  if (key === 'f') {synth.triggerAttackRelease("F3", 0.3);}
  if (key === 'g') {synth.triggerAttackRelease("G3", 0.3);}
  if (key === 'h') {synth.triggerAttackRelease("B3", 0.3);}
  if (key === 'j') {synth.triggerAttackRelease("C4", 0.3);}
  if (key === 'k') {synth.triggerAttackRelease("D4", 0.3);}
  if (key === 'l') {synth.triggerAttackRelease("E4", 0.3);}
  if (key === ';') {synth.triggerAttackRelease("F4", 0.3);}
}
