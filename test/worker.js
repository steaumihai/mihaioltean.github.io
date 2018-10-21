//------------------------------------------------
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}

//------------------------------------------------
/*
function is_prime(n)
{
	for (var i = 2; i * i <= n; i++)
		if (n % i == 0)
			return false;
	return true;
}
*/
//------------------------------------------------
for (var i = 1e8; i < 1e9; i++)
	if (is_prime(i)){
		//console.log(i + " ");
		postMessage(i);
	}
	
postMessage("game over");
//------------------------------------------------
