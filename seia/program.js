var pisica = false;

function modifica()
{
  document.getElementById("id_salut").innerHTML = "Hello";
  
  if (pisica == false){
    document.getElementById("id_img").src = "dog.jpg";
    pisica = true;
  }
  else{
    document.getElementById("id_img").src = "cat.jpg";
    pisica = false;
  }
}
