video="";

function preload(){
video=createVideo("video.mp4");
video.hide();
}
function setup(){
canvas=createCanvas(270,270);
canvas.center();
}
function draw(){
image(video,0,0,270,270)
}
function start(){
objectDetector = ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelloaded(){
    console.log("Model Loaded!");
    status=true;
    video.loop();
    video.speed(6);
    video.volume(0);

}