//-------------------------------------------------
function start_worker()
{
	if (window.Worker) { // Check if Browser supports the Worker api.
	// Requires script name as input
		var myWorker = new Worker("worker.js");

		for (var i = 1e7; i < 1e9; i++)
			if (is_prime(i)){
				document.getElementById("id_main").innerHTML += i + " ";
		}

		myWorker.onmessage = function(e) {
			document.getElementById("id_worker").innerHTML += e.data + " ";
		};
	}
}
//-------------------------------------------------