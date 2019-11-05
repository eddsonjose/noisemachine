//Noise Machine
//by Eddson Jose
let synth = new Tone.Synth() .toMaster();
let div0, div1, div2;
let keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, keySemicolon;

//-----------------------------------------------------------------------------
function setup() {
  noCanvas();
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
