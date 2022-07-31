music="";
rwx=0;
rwy=0;
lwx=0;
lwy=0;
scorelw=0
scorerw=0

function preload(){

music=loadSound("music.mp3")

}

function update(){

music.play();
music.setVolume(1);
music.rate(1);

}

function setup(){

c1=createCanvas(500,400);
c1.center();
v1=createCapture(VIDEO);
v1.hide();
pn=ml5.poseNet(v1,modelLoaded);
pn.on("pose",gotPoses);

}

function modelLoaded()
{

console.log("Model is Loaded")

}

function gotPoses(results){
if(results.length>0){

console.log(results);
rwx=results[0].pose.rightWrist.x;
console.log("Right Wrist X Position is ",rwx)
rwy=results[0].pose.rightWrist.y;
console.log("Right Wrist Y Position is ",rwy)
lwx=results[0].pose.leftWrist.x;
console.log("Left Wrist X Position is ",lwx)
lwy=results[0].pose.leftWrist.y;
console.log("Left Wrist Y Position is ",lwy)
scorelw=results[0].pose.keypoints[9].score;
console.log("The score of left wrist is ",scorelw)
scorerw=results[0].pose.keypoints[10].score;
console.log("The Score of right wrist is ",scorerw)

}


}

function draw(){

image(v1,0,0,500,400);
fill("red")
if(scorerw>0.2){

circle (rwx,rwy,20)

if(rwy>0 && rwy<100){

    music.rate(0.5)
    document.getElementById("s1").innerHTML="Speed is 0.5"
    
    }
else if(rwy>100 && rwy<200){

music.rate(1.5);
document.getElementById("s1").innerHTML="Speed is 1.5"

}
else if(rwy>200 && rwy<300){

music.rate(2.5)
document.getElementById("s1").innerHTML="Speed is 2.5"

}
}
if(scorelw>0.2){

circle(lwx,lwy,20)

if(lwy>0 && lwy<100)
{

music.setVolume(0.2)
document.getElementById("vo1").innerHTML="Volume is 0.2"

}
else if(lwy>100 && lwy<150)
{

music.setVolume(0.5)
document.getElementById("vo1").innerHTML="Volume is 0.5"

}
else if(lwy>150 && lwy<250)
{

music.setVolume(0.7)
document.getElementById("vo1").innerHTML="Volume is 0.7"

}
else if(lwy>250 && lwy<350)
{

music.setVolume(1.0)
document.getElementById("vo1").innerHTML="Volume is 1.0"


}
}



}


