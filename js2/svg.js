document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.0";

window.addEventListener("deviceorientation", on_device_orientation);
//-----------------------------------------------------
function deseneaza_cerc(unghi1, unghi2)
{
	var cerc = document.getElementById("id_circle");
	cerc.setAttribute("cx", 200 + unghi1 * 200 / 90);
	cerc.setAttribute("cy", 200 + unghi2 * 200 / 90);
}
//-----------------------------------------------------
function on_device_orientation(e)
{
	deseneaza_cerc(e.gamma, e.beta);
}
//-----------------------------------------------------