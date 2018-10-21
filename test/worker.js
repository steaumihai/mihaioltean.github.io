var stopped = false;
//------------------------------------------------
self.onmessage = function(e) {
  if (e.data == "stop"){
	  stopped = true;
  }
}
//------------------------------------------------
function is_prime(n)
{
	for (var i = 2; i * i <= n; i++)
		if (n % i == 0)
			return false;
	return true;
}
//------------------------------------------------
function compute_primes(start)
{
	if (stopped){
		postMessage("stopped");
	}
	else{		
		for (var i = start.number; i < start.number + 10000; i++){
			if (is_prime(i)){
				postMessage(i);
			}
		}
		start.number += 1000;
		if (start.number >= 1e12)
			postMessage("stopped");
		else
			setTimeout(compute_primes, 10, start_number);
	}
}
//------------------------------------------------
var start_number = {number:1e11};

id_timer_worker = setTimeout(compute_primes, 10, start_number);