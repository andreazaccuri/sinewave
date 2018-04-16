let cnv;
let radius = 15;
let vertices = 0;
let inc;
let waveHeight = 10;
let waveFreq = 0;
let wave = 0;
let period = 1;
let polygonNum = 30;

function setup() {
  // put setup code here
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
  inc = PI / 30;
}

function draw() {
  // put drawing code here
  background(0);
  // fill(255, 0, 0);
  noFill();
  stroke(255);
  strokeWeight(2);

  vertices = document.getElementById('vertices').value;
  period = document.getElementById('freq').value;
  waveHeight = document.getElementById('height').value;
  polygonNum = document.getElementById('number').value;

  for (var i = 0; i < polygonNum; i++) {
    waveFreq = map(i, 0, polygonNum, 0, TWO_PI * period);
    let y = (height/2) + (sin(wave + waveFreq) * waveHeight);
    Polygon(vertices, radius * i, 5 * i , width/2, y);
  }
  wave += inc;
}

function Polygon(vert, r, offset, posX, posY) {
  beginShape(POINTS);
  for (var i = 0; i < vert; i++) {
    let angle = map(i, 0, vert, 0 + offset, TWO_PI + offset);
    let x = cos(angle) * r + posX;
    let y = sin(angle) * (r / 2) + posY;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResize() {
  resizeCanvas(innerWidth, innerHeight);
}
