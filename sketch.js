//Noise Machine
//by Eddson Jose
let song;
//-----------------------------------------------------------------------------
function preload() {
  soundFormats('ogg', 'mp3');
  song = loadSound("music/music.ogg");
}
//-----------------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  isLooping(true);
  song.play();
}
//-----------------------------------------------------------------------------
function draw() {

}
