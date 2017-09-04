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

	if (x > innerWidth){

		cancelAnimationFrame(requestID); // stop the animation
		c.clearRect(0, 0, canvas.width, canvas.height); 
		
		c.translate(translateAirplaneX, translateAirplaneY);
		c.rotate(180 * (Math.PI / 180));
		c.translate(-translateAirplaneX, -translateAirplaneY);


		c.font = '64px Arial'; // draw the airplane
		c.fillStyle = 'rgba(123, 97, 255, 0.8)';
		c.fillText(airplane, x, y);
		
		animateRightToLeft();
	}
	
}

function animateRightToLeft(){

	requestID = requestAnimationFrame(animateRightToLeft); 
	
	c.clearRect(0, 0, canvas.width, canvas.height); 

	c.font = '64px Arial'; 
	c.fillStyle = 'rgba(123, 97, 255, 0.8)';
	c.fillText(airplane, x, y);

	x += 2;

	}
	
animate();





