document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.20.3";

window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);
//-----------------------------------------------------
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML = "alpha=" + Math.round(e.alpha * 100) / 100;
	document.getElementById("id_x").innerHTML = "beta=" + Math.round(e.beta * 100) / 100;
	document.getElementById("id_y").innerHTML = "gamma=" + Math.round(e.gamma * 100) / 100;
}
//-----------------------------------------------------
function on_device_motion(e)
{
	document.getElementById("id_acc_x").innerHTML = "acc_x=" + Math.round(e.acceleration.x * 100) / 100;
	document.getElementById("id_acc_y").innerHTML = "acc_y=" + Math.round(e.acceleration.y * 100) / 100;
	document.getElementById("id_acc_z").innerHTML = "acc_z=" + Math.round(e.acceleration.z * 100) / 100;

	document.getElementById("id_acc_g_x").innerHTML = "acc_g_x=" + Math.round(e.accelerationIncludingGravity.x * 100) / 100;
	document.getElementById("id_acc_g_y").innerHTML = "acc_g_y=" + Math.round(e.accelerationIncludingGravity.y * 100) / 100;
	document.getElementById("id_acc_g_z").innerHTML = "acc_g_z=" + Math.round(e.accelerationIncludingGravity.z * 100) / 100;
	
	var beta = Math.atan(e.accelerationIncludingGravity.y / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	var gamma = -Math.atan(e.accelerationIncludingGravity.x / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	
	document.getElementById("id_rot_x").innerHTML = "beta=" + Math.round(beta * 100) / 100;	
	document.getElementById("id_rot_y").innerHTML = "gamma=" + Math.round(gamma * 100) / 100;	
}
//-----------------------------------------------------