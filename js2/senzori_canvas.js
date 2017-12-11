document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.04.2"

//window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

var unghiuri = {gamma:0, beta:0};

setInterval(deseneaza_cerc, 40, unghiuri);

//-----------------------------------------------------
function deseneaza_cerc(u)
{
		ctx.clearRect(0, 0, 400, 400);
		
		//ctx.rect(0, 0, 400, 400);
		//ctx.stroke();
		ctx.strokeRect(0, 0, 400, 400);
		
		ctx.beginPath();
		ctx.arc(200 + u.gamma * 200 / 90, 200 + u.beta * 200 / 90, 20, 0, 2 * Math.PI);
		ctx.fillStyle = "#FF0000";
		//ctx.fill();
		ctx.strokeStyle = "#00FF00";
		ctx.lineWidth = 5;
		ctx.stroke();
}
//-----------------------------------------------------
function on_device_orientation(e)
{
	//deseneaza_cerc(e.gamma, e.beta);
	unghiuri.gamma = e.gamma;
	unghiuri.beta = e.beta;
}
//-----------------------------------------------------
function on_device_motion(e)
{
	unghiuri.beta = Math.atan(e.accelerationIncludingGravity.y / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	unghiuri.gamma = -Math.atan(e.accelerationIncludingGravity.x / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	
	//deseneaza_cerc(gamma, beta);
}
//-----------------------------------------------------
