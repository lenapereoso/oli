function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230,166,190);
}

function draw() {
  d = random(10,60)
  fill(255,random(55,200))
  ellipse(mouseX,mouseY,d,d);
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
 
