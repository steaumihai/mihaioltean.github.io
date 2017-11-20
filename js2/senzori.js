
window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);
//-----------------------------------------------------
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML = "z=" + e.alpha;
	document.getElementById("id_x").innerHTML = "x=" + e.beta;
	document.getElementById("id_y").innerHTML = "y=" + e.gamma;
}
//-----------------------------------------------------
function on_device_motion(e)
{
	document.getElementById("id_acc_x").innerHTML = "acc_x=" + e.acceleration.x;
	document.getElementById("id_acc_y").innerHTML = "acc_y=" + e.acceleration.y;
	document.getElementById("id_acc_z").innerHTML = "acc_z=" + e.acceleration.z;

	document.getElementById("id_acc_g_x").innerHTML = "acc_g_x=" + e.accelerationIncludingGravity.x;
	document.getElementById("id_acc_g_y").innerHTML = "acc_g_y=" + e.accelerationIncludingGravity.y;
	document.getElementById("id_acc_g_z").innerHTML = "acc_g_z=" + e.accelerationIncludingGravity.z;
}
//-----------------------------------------------------