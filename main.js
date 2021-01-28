song1="";

song2="";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
	song1 = loadSound("music1.mp3");
	song2 = loadSound("music2.mp3");
}

function setup() {
	canvas =  createCanvas(600,400);
	canvas.center();
    canvas.position(470, 270);
	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized');
  }

  function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}
email = localStorage.getItem("email");
  document.getElementById("email").innerHTML= "<h1>Welcome "+email+"!</h1>";


  function draw(){
	image(video, 0, 0, 600, 400);
  }
  
  function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}