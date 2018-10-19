document.getElementById("id_business_version").innerHTML = "Bussiness version: 2018.10.19.0";


function EC2()
{
	this.read_data = function(){
		this.a = document.getElementById("id_a").value;
		this.b = document.getElementById("id_a").value;
		this.c = document.getElementById("id_a").value;
	};
	this.solve2 = function(){
		var delta = this.b * this.b - 4 * this.a * this.c;
		
		if (delta >= 0){
			this.x1 = {re:(-coef.b - Math.sqrt(delta)) / (2 * coef.a), im:0};
			this.x2 = {re:(-coef.b + Math.sqrt(delta)) / (2 * coef.a), im:0};
		}
		else{
			this.x1 = {re:-coef.b / (2 * coef.a), im:-Math.sqrt(-delta) / (2 * coef.a)};
			this.x2 = {re:-coef.b / (2 * coef.a), im: Math.sqrt(-delta) / (2 * coef.a)};
		}	
	};
	this.print_solutions = function(){
		document.getElementById("id_x1").innerHTML = this.x1.re + " + " + this.x1.im + "i";
		document.getElementById("id_x2").innerHTML = this.x2.re + " + " + this.x2.im + "i";	
	};
}
//-------------------------------------------
function solve()
{
	var ec2 = new EC2();
	ec2.read_data();
	ec2.solve2();
	ec2.print_solutions();
}