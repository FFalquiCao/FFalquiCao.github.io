let x = 0;
let y = 400;
let n = [];

function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);
  stroke(255);
  //strokeWeight(3);
  for(let i=0;i<400; i++) {
    n.push([]);
    for(let j=0; j<400; j++) {
      n[i].push(0);
    }
  }
}

function draw() {
  //background(0, 0, 0);
  for(let i = 0; i<10000; i++) {
    let z = random(400);
  
    if(abs(z-x)<abs(z-y)) {
      x=floor(z);
    } else {
      y=floor(z);
    }
  
    n[x][y]++;
    
  
    stroke(n[x][y]);
    point(x, 400-y);
  
  }
  stroke(255);
  line(0,400,200,0);
  line(0,200,400,0);
  line(0,400,400,0);
  
  /*
  for(let i=0;i<400; i++) {
    for(let j=0; j<400; j++) {
      stroke(n[i][j]);
      
      
    }
  }*/
}
