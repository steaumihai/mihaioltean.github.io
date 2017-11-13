
window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);
//--------------------------------
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML = "z=" + e.alpha;
	document.getElementById("id_x").innerHTML = "x=" + e.beta;
	document.getElementById("id_y").innerHTML = "y=" + e.gamma;
}
//--------------------------------
function on_device_motion(e)
{

}
//--------------------------------