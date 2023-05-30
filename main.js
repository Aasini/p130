song=""
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftwrist=0;
function preload()
{
    song=loadSound("music.mp3");
    
}


function setup()
{
canvas = createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modeloaded);
posenet.on('poses',gotPoses);
}

function draw()
    {
image(video,0,0,600,500);
fill('#90ee90');
stroke('#ffb6c1');
if(scoreleftwrist > 0.2)
{
circle(leftwristX,leftwristY,20);
InNumber=leftwristY=(leftwristY);
remove_decimals=floor(InNumberleftwristy);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="volume=" + volume;
song.setVolume(volume);

if(scorerightwrist > 0.2)
{
circle(rightwristY,rightwristY,20);

if(rightwristY>0 && rightwristY<=100)
{
    document.getElementById("speed").innerHTML =" speed = 0.5x"
    song.rate(0.5);
}

else if(rightwristY>100 && rightwristY<=200)
{
    document.getElementById("speed").innerHTML="speed=1x"
    song.rate(1);
}

else if(rightwristY>200 && rightwristY<=300)
{
   document.getElementById("speed").innerHTML="speed=1.5x"
   song.rate(1.5);
}

else if(rightwristY<300 && rightwristY<=400)
{
    document.getElementById("speed").innerHTML="speed=2x"
    song.rate(2);
}

else if(rightwristY<400 && rightwristY<=500)
{
    document.getElementById("speed").innerHTML="speed=2.5x"
    song.rate(2.5);
}
}
}
    }

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
    
}

function modeloaded()
{
    console.log('Posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0 );
    {
        console.log(results);
        leftwristX=results[0].pose.leftwrist.x;
leftwristY=results[0].pose.leftwrist.y;
console.log("leftwristX = " + leftwristX + "leftwristY = " + leftwristY );

rightwristX=results[0].pose.rightwrist.x;
rightwristY=results[0].pose.rightwrist.y;
console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY);
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("scoreleftwrist= + scoreleftwrist");
scorerightwrist =results[0].pose.keypoints[10].score;
scoreleftwrist=results[0].pose.keypoints[10].score;
console.log("scorerightwrist = " + scorerightwrist+ "scoreleftwrist = " +scoreleftwrist);
    }
}