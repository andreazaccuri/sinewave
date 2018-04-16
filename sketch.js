let cnv;
let radius = 50;
let vertices = 7;

function setup() {
  // put setup code here
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
}

function draw() {
  // put drawing code here
  background(51);
  // fill(255, 0, 0);
  noFill();
  stroke(255);
  strokeWeight(1);
  for (var i = 0; i < 10; i++) {
    Polygon(vertices, radius * i, width/2, height/2);
  }


}

function Polygon(vert, r, posX, posY) {
  beginShape();
  let value = document.getElementById('vertices').value;
  vertices = value;
  for (var i = 0; i < vert; i++) {
    let angle = map(i, 0, vert, 0, TWO_PI);
    let x = cos(angle) * r + posX;
    let y = sin(angle) * (r / 2) + posY;
    vertex(x, y);
  }
  endShape(CLOSE);
}


function windowResize() {
  resizeCanvas(innerWidth, innerHeight);
}
