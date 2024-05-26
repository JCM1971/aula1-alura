function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background("blue");
    fill("black");
    textSize(140)
    textAlign(CENTER, CENTER);
     
    if(mouseX < 50) {
      let palavra = "B";
      text(palavra, 300, 200);
    } else {
      let palavra = "Big Data";
      text(palavra, 300, 200);
    }
  }