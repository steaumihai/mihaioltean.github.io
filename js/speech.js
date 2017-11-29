document.getElementById("id_business_level_version").innerHTML = "Business level version: 2017.11.29.0"; 

document.addEventListener("touchstart", on_touch_start);

var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = on_speech_result;
recognition.onsoundend = on_sound_end;

//-----------------------------------------
function on_touch_start(e)
{
	recognition.start();
}
//-----------------------------------------
function on_speech_result(e)
{
	document.getElementById("id_p").innerHTML = e.results[0][0].transcript;
}
//-----------------------------------------
function on_sound_end(e)
{
	recognition.stop();
}
//-----------------------------------------