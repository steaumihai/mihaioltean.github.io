//------------------------------------------------
onmessage = function(e) {
  var workerResult = 'Result: ' + (e.data[0]);
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
	
	if (is_prime(i)){
		//console.log(i + " ");
		postMessage(i);
	}
}
postMessage("worker over");
//------------------------------------------------
