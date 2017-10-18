//Global variables
window.onload = choosePic;

var imgs = ['pics/babydog.jpg', 'pics/bagdog.jpg', 'pics/boop.jpg', 'pics/hellobear.jpg', 'pics/winkingdog.jpg']

function choosePic()
{
	var randNum = Math.floor(Math.random() * imgs.length);

	document.getElementById("randpic").src = imgs[randNum];
}