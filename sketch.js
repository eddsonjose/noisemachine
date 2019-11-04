//Noise Machine
//by Eddson Jose
let synth = new Tone.Synth() .toMaster();
//-----------------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}
//-----------------------------------------------------------------------------
function draw() {
  fill(255);
  text("Use the keyboard keys: ASDFGHJKL;", width/2, height/2);
}
function keyTyped() {
  if (key === 'a') {
    console.log("playing a");
    synth.triggerAttackRelease("C3", 0.3);
  }
  if (key === 's') {
    console.log("playing s");
    synth.triggerAttackRelease("D3", 0.3);
  }
  if (key === 'd') {
    console.log("playing d");
    synth.triggerAttackRelease("E3", 0.3);
  }
  if (key === 'f') {
    console.log("playing f");
    synth.triggerAttackRelease("F3", 0.3);
  }
  if (key === 'g') {
    console.log("playing g");
    synth.triggerAttackRelease("G3", 0.3);
  }
  if (key === 'h') {
    console.log("playing h");
    synth.triggerAttackRelease("B3", 0.3);
  }
  if (key === 'j') {
    console.log("playing j");
    synth.triggerAttackRelease("C4", 0.3);
  }
  if (key === 'k') {
    console.log("playing k");
    synth.triggerAttackRelease("D4", 0.3);
  }
  if (key === 'l') {
    console.log("playing l");
    synth.triggerAttackRelease("E4", 0.3);
  }
  if (key === ';') {
    console.log("playing ;");
    synth.triggerAttackRelease("F4", 0.3);
  }
}
