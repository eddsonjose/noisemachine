//Noise Machine
//by Eddson Jose
//-----------------------------------------------------------------------------
let value = 0, counter = 0, counter2 = 0, monoSynth, osc;
//-----------------------------------------------------------------------------
function setup() {
  monoSynth = new p5.MonoSynth();
  monoSynth.amp(2);
  createCanvas(windowWidth, windowHeight);//Canvas
  textAlign(CENTER);
  textSize(12);
}
//-----------------------------------------------------------------------------
function draw() {
  background(10, 20, 70);
  strokeWeight(5); stroke(255); fill(0, 0);
  rect(width/4+width/8, height/12, width/4, height*0.85);
  noStroke(); fill(0, 150, 0);
  rect(width/2-25, height*0.78, 50, 50, 25);
  rect(width/2-165, height/4-15, 80, 26, 13);
  rect(width/2+10, height/2-142, 160, 26, 13);
  noStroke(); fill(255);
  text(value, width/2, height*0.8+15);
  text('Fast Reply', width/2-125, height/4);
  text('Type fast for more friends', width/2+90, height/3);

  counter++; if (counter >= 5) {counter = 0; value--}
  //CDAEFG
  if (value < 0) {value = 0;} fill(200, 0, 0);
  if (value === 10) {monoSynth.play("G4", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 20) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 30) {monoSynth.play("C5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 40) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 50) {monoSynth.play("A5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 60) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 70) {monoSynth.play("F5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 80) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 90) {monoSynth.play("C5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 100) {monoSynth.play("E5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 110) {monoSynth.play("C5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 120) {monoSynth.play("F5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 130) {monoSynth.play("C5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 140) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 150) {monoSynth.play("G5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 160) {monoSynth.play("C5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 170) {monoSynth.play("C5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 180) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 190) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 200) {monoSynth.play("A5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 210) {monoSynth.play("A5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 180) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 230) {monoSynth.play("D5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 240) {monoSynth.play("C5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
  if (value === 250) {monoSynth.play("G5", 0, 0, 0); circle(width/2+18, height*0.8-13, 15);}
}
//-----------------------------------------------------------------------------
function keyTyped() {if (key) {value++;}}
