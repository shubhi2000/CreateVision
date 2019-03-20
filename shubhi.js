let img;
let y=-240;
let x=0;
function setup(){
	createCanvas(1280,620);
	img=loadImage('shubhi.jpg');
}
function draw(){
	image(img,175,100,img.width/2.6,img.height/2.6);
	image(img,775,100,img.width/2.6,img.height/2.6);
	fill(0);
	ellipse(640,y,100,100);
	ellipse(50,y,100,100);
	ellipse(1230,y,100,100);
	y=y+50;
	ellipse(x,50,100,100);
	ellipse(x,600,100,100);
	x+=50;
}