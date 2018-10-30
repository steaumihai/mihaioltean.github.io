window.addEventListener("deviceorientation", la_schimbare_gyro);

function la_schimbare_gyro(e)
{
  document.getElementById("id_x").innerHTML = e.beta;
  document.getElementById("id_y").innerHTML = e.gamma;
  document.getElementById("id_z").innerHTML = e.alpha;
  
}
