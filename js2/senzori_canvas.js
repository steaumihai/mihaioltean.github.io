document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.28.0";

//window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

//-----------------------------------------------------
function deseneaza_cerc(unghi1, unghi2)
{
		ctx.clearRect(0, 0, 400, 400);
		
		ctx.rect(0, 0, 400, 400);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(200 + unghi1 * 200 / 90, 200 + unghi2 * 200 / 90, 20, 0, 2 * Math.PI);
		ctx.fillStyle = "#FF0000";
		//ctx.fill();
		ctx.strokeStyle = "#00FF00";
		ctx.lineWidth = 5;
		ctx.stroke();
}
//-----------------------------------------------------
function on_device_orientation(e)
{
	deseneaza_cerc(e.gamma, e.beta);
}
//-----------------------------------------------------
function on_device_motion(e)
{
	var beta = Math.atan(e.accelerationIncludingGravity.y / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	var gamma = -Math.atan(e.accelerationIncludingGravity.x / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	
	deseneaza_cerc(gamma, beta);
}
//-----------------------------------------------------
