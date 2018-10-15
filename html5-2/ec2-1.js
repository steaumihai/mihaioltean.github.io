document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.15.1";


function citeste()
{
	var a = document.getElementById("id_a").value;
	var b = document.getElementById("id_b").value;
	var c = document.getElementById("id_c").value;
	
	var coeficienti = {a:a, b:b, c:c};
	return coeficienti;
}
//------------------------------
function calculeaza(coeficienti)
{
	var delta = coeficienti.b * coeficienti.b - 4 * coeficienti.a * coeficienti.c;
	
	var x1_re, x2_re, x1_im, x2_im;
	if (delta >= 0){
		x1_re = (-coeficienti.b - Math.sqrt(delta)) / (2 * coeficienti.a);
		x2_re = (-coeficienti.b + Math.sqrt(delta)) / (2 * coeficienti.a);
		x1_im = x2_im = 0;
	}
	else{
		x1_re = -coeficienti.b / (2 * coeficienti.a);
		x1_im = -Math.sqrt(-delta) / (2 * coeficienti.a);
		x2_re = -coeficienti.b / (2 * coeficienti.a);
		x2_im = Math.sqrt(-delta) / (2 * coeficienti.a);
	}
	var x1 = {re:x1_re, im: x1_im};
	var x2 = {re:x2_re, im: x2_im};
	var solutii = {x1: x1, x2:x2};
	return solutii;
}
//------------------------------
function afiseaza(solutii)
{
	document.getElementById("id_x1").innerHTML = solutii.x1.re + " + " + solutii.x1.im + "i";
	document.getElementById("id_x2").innerHTML = solutii.x2.re + " + " + solutii.x2.im + "i";
}
//------------------------------
function rezolva()
{
	var coeficienti = citeste();
	var solutii = calculeaza(coeficienti);
	afiseaza(solutii);
}
//------------------------------