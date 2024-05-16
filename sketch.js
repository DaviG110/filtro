let video;

function preload(){
}


function setup() {
  createCanvas(1100, 500);
  video = createCapture(VIDEO);
  video.hide();

  tintColor = "";
}

function draw() {
  background(220);
  image(video,0,0,640,480);
  tint(tintColor);
  }

function takeSnapshot() {
 save("studentName.png");
}

function aplicarFiltro() {
tintColor = document.getElementById("colorName").value; 
}
