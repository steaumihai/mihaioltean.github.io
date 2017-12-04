document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.2";

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

ctx.translate(100, 50);

ctx.beginPath();
ctx.arc(0, 0, 20, 0, 2 * Math.PI);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.strokeStyle = "#00FF00";
ctx.lineWidth = 5;
ctx.stroke();