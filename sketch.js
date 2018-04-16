let cnv;

function setup() {
  // put setup code here
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
}

function draw() {
  // put drawing code here
  background(51);
}

function windowResize() {
  resizeCanvas(innerWidth, innerHeight);
}
