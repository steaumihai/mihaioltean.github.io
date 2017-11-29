document.getElementById("id_business_level_version").innerHTML = "Business level version: 2017.11.29.2"; 

document.addEventListener("touchstart", on_touch_start);

var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = on_speech_result;
recognition.onsoundend = on_sound_end;

var is_listening = false;
//-----------------------------------------
function on_touch_start(e)
{
	if (!is_listening){
		recognition.start();
		is_listening = true;
	}
}
//-----------------------------------------
function on_speech_result(e)
{
	document.getElementById("id_p").innerHTML = e.results[0][0].transcript + "(" + e.results[0][0].confidence + ")";
}
//-----------------------------------------
function on_sound_end(e)
{
	recognition.stop();
	is_listening = false;
}
//-----------------------------------------