let counter = 0;
let countInterval = setInterval(footmark, 1000);
let x = 0;
let y = 0;

function setup() {
  createCanvas(600, 400);
  background(170, 120, 40);
  setTimeout(batteryGreen, 0);
  setTimeout(batteryOrange, 2000);
  setTimeout(batteryRed, 4000);
  setTimeout(batteryEmpty, 6000);
  setTimeout(cameraTurnOff, 7000);
  
  // setTimeout(redDotDisappear, 2000);

  // setTimeout(footmark, 1000 ,random (0, width), random(0, height), color(60));

  // for (x = 0; x < 5 - random(0, 3); x++) {
  //   footmark(random(0, width - 80), random(0, height - 80), 80, color(108, 148, 87));
  // }
}

function draw() {
  stroke(225);
  strokeWeight(3)
  // horizontal
  line(40, 40, 90, 40);
  line(560, 40, 510, 40);
  line(40, 360, 90, 360);
  line(560, 360, 510, 360);
  // vertical
  line(40, 40, 40, 75);
  line(560, 40, 560, 75);
  line(40, 360, 40, 325);
  line(560, 360, 560, 325);
  // focus point
  strokeWeight(5)
  point(300, 200);
  // REC
  stroke(255, 0, 0);
  strokeWeight(10);
  point(495, 60);
  stroke(255);
  strokeWeight(1);
  textSize(16);
  fill(255)
  text('REC', 510, 65);
  // battery
  stroke(255);
  strokeWeight(2);
  noFill();
  rect(52, 50, 36, 16);
  fill(255);
  rect(89, 54, 5, 8);
  // battery level
  // fill(0, 255, 0); 
  // quad(52, 51, 65, 51, 62, 66, 52, 66);
  // quad(65, 51, 78, 51, 75, 66, 62, 66);
  // quad(78, 51, 88, 51, 88, 66, 75, 66);
}

function batteryGreen(){
stroke(255);
fill(0, 255, 0); 
quad(52, 51, 65, 51, 62, 66, 52, 66);
quad(65, 51, 78, 51, 75, 66, 62, 66);
quad(78, 51, 88, 51, 88, 66, 75, 66);
}

function batteryOrange(){
  stroke(255);
  fill(250, 200, 0); 
  quad(52, 51, 65, 51, 62, 66, 52, 66);
  quad(65, 51, 78, 51, 75, 66, 62, 66);
  fill(170, 120, 40);
  quad(78, 51, 88, 51, 88, 66, 75, 66);
}

function batteryRed(){
  stroke(255);
  fill(255, 0, 0); 
  quad(52, 51, 65, 51, 62, 66, 52, 66);
  fill(170, 120, 40);
  quad(65, 51, 78, 51, 75, 66, 62, 66);
  quad(78, 51, 88, 51, 88, 66, 75, 66);
}

function batteryEmpty(){
  stroke(255);
  fill(170, 120, 40);
  quad(52, 51, 65, 51, 62, 66, 52, 66);
  quad(65, 51, 78, 51, 75, 66, 62, 66);
  quad(78, 51, 88, 51, 88, 66, 75, 66);
}

function cameraTurnOff(){
  clear();
  erase();
}
// function redDot(){
//   stroke(255, 0, 0);
//   strokeWeight(10);
//   point(495, 60);
//   setTimeout(redDot, 1000);

// }

// function redDotDisappear(){
//   stroke(170, 120, 40);
//   strokeWeight(10);
//   point(495, 60);
//   setTimeout(redDotDisappear, 4000);
// }

// function footmark(x, y, colour){
//   fill(colour);
//   stroke(0);
//   ellipse(x, y - 50, 50, 65);
//   arc(x, y, 35, 40, 100, 10, CHORD);

function footmark(){
  fill(60);
  stroke(0);
  x = random(0, width);
  y = random(0, height);
  ellipse(x, y - 50, 50, 65);
  arc(x, y, 35, 40, 100, 10, CHORD);

  // setTimeout(footmark, 1000 ,random (0, width), random(0, height), color(60));
  counter++;
  if (counter > 5){
    clearInterval(countInterval);
  }
}