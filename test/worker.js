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
for (var i = 1e11; i < 1e12; i++){
	if (stopped)
		break;
	if (is_prime(i)){
		//console.log(i + " ");
		postMessage(i);
	}
}
postMessage("stopped");
//------------------------------------------------
