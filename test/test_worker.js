//-------------------------------------------------
function start_worker()
{
	if (window.Worker) { // Check if Browser supports the Worker api.
	// Requires script name as input
		var myWorker = new Worker("worker.js");


		myWorker.onmessage = function(e) {
			console.log('Message received from worker: ' + e.data);
		};
	}
}
//-------------------------------------------------