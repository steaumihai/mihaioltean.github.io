document.getElementById("id_start_button").addEventListener("click", start_worker);
document.getElementById("id_stop_button").addEventListener("click", stop_worker);
//-------------------------------------------------
function draw_circle(ctx, position, step, w, h)
{
	// clear surface
		ctx.clearRect(0, 0, w, h); 
		
		// draw circle
		ctx.beginPath();
		ctx.strokeStyle = "#000000";
		ctx.arc(Math.cos(position.angle) * 50 + 200, Math.sin(position.angle) * 50 + 200, 50, 0, 2 * Math.PI);
		ctx.stroke();
		
		// update next angle
		position.old_angle = position.angle;
		position.angle += step;
		if (position.angle > 2 * Math.PI)
			position.angle -= 2 * Math.PI;
}
//----------------------------------------------------
function start_worker()
{
	if (window.Worker) {
		myWorker = new Worker("worker.js");
		myWorker.onmessage = function(e) {
			document.getElementById("id_worker").innerHTML = e.data;
			if (e.data == "stopped"){
				document.getElementById("id_stop_button").disabled = true;
				document.getElementById("id_start_button").disabled = false;
				clearInterval(interval_id);
			}
		};
		document.getElementById("id_stop_button").disabled = false;
		document.getElementById("id_start_button").disabled = true;

		var canvas = document.getElementById("id_canvas");
		var ctx = canvas.getContext("2d");
		
		var position = {angle:0, old_angle:0};
		interval_id = setInterval(draw_circle, 100, ctx, position, 0.1, canvas.width, canvas.height);
	}
}
//-------------------------------------------------
function stop_worker()
{	
	myWorker.postMessage("stop");	
}
//-------------------------------------------------
