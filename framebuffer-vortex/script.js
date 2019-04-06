//import mmap,math as m
//q=open("/dev/fb0","r+")
//b=mmap.mmap(3,8294400)
//z=j=k=l=f=248
//while 1:
// try:n=7680*int(m.cos(i)*r+540)+4*int(m.sin(i)*r+960);b[n:3+n]=bytes([j,k,l]);i+=4;r+=m.sin(z);j=j%f+1
// except:i=r=0;z+=.01;k=k%f+8;l=l%f+9

var canvas = document.getElementById("x");
var ctx = canvas.getContext("2d");
ctx.fillStyle='black';
ctx.fillRect(0,0,1920,1080);

function drawPoint(n, c) {
	if (n < 1920*1080*4) {
		x = (n/4) % 1920;
		y = Math.floor((n/4)/1920);
		ctx.fillStyle = "rgba("+c[2]+","+c[1]+","+c[0]+",1)";
		ctx.fillRect(x, y, 1, 1);
		return true;
	} else {
		return false;
	}
}

var z=j=k=l=f=248;
var i=r=0;
function update() {
	for (var loop = 0; loop < 1000; loop++) {
		n = 7680*Math.floor(Math.cos(i)*r+540)+4*Math.floor(Math.sin(i)*r+960);
		if (!drawPoint(n, [j,k,l])) {
			console.log(n);
			i=r=0;
			z+=.01;
			k=k%f+8;
			l=l%f+9;
		} else {
			i+=4;
			r+=Math.sin(z);
			j=j%f+1;
		}
	}
}

setInterval(update, 0);
