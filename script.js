var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

var c = canvas.getContext('2d'); 
var x = 0; 
var y = 200;

// set the coordinates on which the canvas should be rotated
var translateAirplaneX = innerWidth; 
var translateAirplaneY = 200 - 25;

var airplane = '\u2708';

function animate(){

	requestID = requestAnimationFrame(animate); //recursively call the animate function

	c.clearRect(0, 0, canvas.width, canvas.height); 

	c.font = '64px Arial'; // draw the airplane
	c.fillStyle = 'rgba(123, 97, 255, 0.8)';
	c.fillText(airplane, x, y);

	x += 2;

	// check if x is greater than the innerWidth. If it is, rotate the plane 180 and fly it back
	if (x > innerWidth){

		c.clearRect(0, 0, canvas.width, canvas.height); 
		
		c.translate(translateAirplaneX, translateAirplaneY);
		c.rotate(180 * (Math.PI / 180));
		c.translate(-translateAirplaneX, -translateAirplaneY);

		c.font = '64px Arial'; // draw the airplane
		c.fillStyle = 'rgba(123, 97, 255, 0.8)';
		c.fillText(airplane, x, y);
		
	} 

	// on the right to left animation, once x is 2 times the innerWidth, set x to 0 (resets the entire animation cycle)
	if (x == (innerWidth * 2)){
		x = 0;
	}

	// if you want to see the current value of x
	document.getElementById('note').innerHTML = 'X: ' + x + ' --innerWidth: ' + innerWidth
	
}
	
animate();





