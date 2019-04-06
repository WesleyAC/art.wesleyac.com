var canvas = document.getElementById("x");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext("2d");
ctx.fillStyle='black';
ctx.fillRect(0,0,canvas.width,canvas.height);

function drawPoint(x, y, c) {
	ctx.fillStyle = "rgba("+c[0]+","+c[1]+","+c[2]+",1)";
	ctx.fillRect(x, y, 1, 1);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCoord(angle, spiral, cx, cy) {
	return [Math.sin(angle)*spiral+cx, Math.cos(angle)*spiral+cy];
}

var angle = 0;
var spiral = 0;
var spiral_delta = 0.1;
var color = 100;
var color_delta = 1;
var t = 0;
var cx = canvas.width/2;
var cy = canvas.height/2;
function update() {
	while (Math.random() < 0.99999) {
		var coord = getCoord(angle, spiral, cx, cy);
		drawPoint(coord[0], coord[1], [color, color, color]);
		angle += 0.01;
		spiral += spiral_delta;
		t++;
	}
	cx = getRandomInt(0, canvas.width);
	cy = getRandomInt(0, canvas.height);
	angle = 0;
	spiral = 0;
	spiral_delta = (Math.random() + 0.1)*0.03
	spiral_delta *= (Math.random() > 0.5 ? -1 : 1);
	color += color_delta;
	if (color > 255) {
		color_delta *= -1;
		color = 255;
	}
	if (color < 0) {
		color_delta *= -1;
		color = 0;
	}
}

setInterval(update, 32);
