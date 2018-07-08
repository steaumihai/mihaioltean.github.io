document.getElementById("v1").innerHTML = "v2.7";
var transformCanvas = document.getElementById('transformCanv');
transformContext = transformCanvas.getContext('2d');
tilesContext = document.getElementById("tileCanv").getContext('2d');
originalPhotoContext = document.getElementById("originalCanv").getContext('2d');



var linesCanvas = document.getElementById('linesCanv');
linesContext = linesCanvas.getContext('2d');
linesContext.fillStyle = "blue";
tilesContext.fillStyle="green";
tilesContext.fillRect(0,0,linesCanvas.width,linesCanvas.height);
linesContext.fillRect(0, 0, linesCanvas.width, linesCanvas.height);

base_image = new Image();
base_image.src = 'sudoku.png';
base_image.onload = on_load_image;

//---------------------------------------------------------------
function rgb_to_gray(rgb_array) 
{
    return 0.299 * rgb_array[0] + 0.587 * rgb_array[1] + 0.114 * rgb_array[2];
}
//---------------------------------------------------------------
function on_load_image()
{
	transformContext.drawImage(base_image, 0, 0);
	originalPhotoContext.drawImage(base_image,0,0);
	var image = transformContext.getImageData(1, 1, 400, 400);
	var data = image.data;
	// for(var i = 0;i<data.length;i+=4){
	// 	var red = data[i];
	// 	var green = data[i+1];
	// 	var blue = data[i+2];

	// 	if(red>240&&green>240&&blue>240){
	// 		data[i] = 255;
	// 		data[i+1] = 255;
	// 		data[i+2] = 255;
	// 	} else {
	// 		data[i] = 0;
	// 		data[i+1] = 0;
	// 		data[i+2] = 0;
	// 	}
	// }
	// transformContext.putImageData(image,0,0);

	var imageData = CannyJS.canny(transformCanvas);
	imageData.drawOn(transformCanv);

	var diagonala = parseInt(Math.sqrt(transformCanvas.height * transformCanvas.height + transformCanvas.width * transformCanvas.width)+1);

	var accumulator= new Array();

	for (var i=0; i < diagonala; i++){
		accumulator[i] = new Array(180);
	}

	for (var raza = 0; raza < diagonala; raza++){
		for (var theta = 0; theta < 180; theta++){
			accumulator[raza][theta] = 0;
		}
	}

	for (var y = 0; y < transformCanvas.height; y++){
		for (var x = 0; x < transformCanvas.width; x++){
			var culoare = transformContext.getImageData(x, y, 1, 1);
			var data = culoare.data;
			// console.log(data.length);
			if (data[0] > 250 && data[1] > 250 && data[2] > 250){
				for(var theta = 0; theta < 180; theta++){
					var raza = parseInt((x - transformCanvas.width / 2) * Math.cos(theta / 180 * 3.14) + (y - transformCanvas.height / 2) * Math.sin(theta / 180 * 3.14));
					accumulator[raza + diagonala / 2][theta]++;
					// console.log(r+diagonala/2);
				}
			}

		}
	}


	var maxacc = 0;
	for (var r = 0; r < diagonala; r++){
		for (var theta = 0; theta < 180; theta++){
			if (maxacc < accumulator[r][theta]){
				maxacc = accumulator[r][theta];
			}
		}
	}



	// scalez
	for (var r = 0; r < diagonala; r++){
		for (var theta = 0; theta < 180; theta++){
			accumulator[r][theta] = parseInt(accumulator[r][theta] / maxacc * 255);
		}
	}
	
	//teste verific ce valori am in accumulator.
	// var count = 0;
	// var arrayiu = new Array;
	// for(var i=0;i<diagonala;i++){
	// 	for(var j=0;j<180;j++){
	// 		// arrayiu.push(accumulator[i][j]);
	// 		// console.log(accumulator[i][j]);
	// 	}
	// }


	// niste verificari
	// var uniquearray = [];
	// $.each(arrayiu, function(i,el){
	// 	if($.inArray(el,uniquearray)===-1) uniquearray.push(el);
	// });
	// console.log(uniquearray.sort());


	var vertical = new Array;
	var horizontal = new Array

	//toti x
	var totalXs = new Array;
	//toti y
	var totalYs = new Array;

	var prag = 100;

	var xss=0;
	var yss=0;
	var itt1=0;
	var itt2=0;
	var actItt1=0;
	var actItt2=0;


	var actualX = new Array;
	var actualY = new Array;
	for (var raza = 0; raza < diagonala; raza++){
		for (var theta = 0; theta < 180; theta++){
			if(accumulator[raza][theta] > prag){

				
				var x1,y1,x2,y2,test2;
				x1 = 0;

				if(theta != 0){
					y1 = ((raza - diagonala/2 - (x1 - linesCanvas.width / 2) * Math.cos(theta / 180.0 * 3.14)) / Math.sin(theta / 180.0 * 3.14) + linesCanvas.height / 2).toFixed(0);
					totalYs[yss]=y1;
					yss++;
				} else {
					x1 = (raza - diagonala/2) + linesCanvas.width/2;
					totalXs[xss]=x1;
					xss++;
					y1 = 0;
				}

				x2 = linesCanvas.width -1;

				if(theta != 0){
					y2 = ((raza - diagonala/2 - (x2 - linesCanvas.width/2) * Math.cos(theta/180.0*3.14))/ Math.sin(theta/180.0*3.14) + linesCanvas.height/2).toFixed(0);
				} else {
					x2 = (raza - diagonala/2) + linesCanvas.width/2;
					y2 = linesCanvas.height -1;
				}

				// console.log(x1, y1, x2, y2);
				if(x1==0){
					var test = totalYs[itt1 - 1];
					var res = Math.abs(y1 - test);
					console.log(res);
					if(itt1==0){
						linesContext.beginPath();
						linesContext.strokeStyle="#FF0000";
						linesContext.moveTo(x1, y1);
						linesContext.lineTo(x2, y2);
						linesContext.stroke();
						actualY[actItt1]=y1;
						actItt1++;
					} else {
						if(Math.abs(y1 - test) > 7){
							linesContext.beginPath();
							linesContext.strokeStyle="#FF0000";
							linesContext.moveTo(x1, y1);
							linesContext.lineTo(x2, y2);
							linesContext.stroke();
							actualY[actItt1]=y1;
							actItt1++;
						}

					}
					itt1++;
					
				}else{
					// console.log(x1+"/"+totalXs[itt-1]);
					var test = totalXs[itt2-1];
					var res = Math.abs(x1 - test);
					// console.log(res);
					if(itt2==0){
						linesContext.beginPath();
						linesContext.strokeStyle="#000000";
						linesContext.moveTo(x1, y1);
						linesContext.lineTo(x2, y2);
						linesContext.stroke();
						actualX[actItt2]=x1;
						actItt2++;
					} else{
						if(Math.abs(x1 - test) > 7){
							linesContext.beginPath();
							linesContext.strokeStyle="#000000";
							linesContext.moveTo(x1, y1);
							linesContext.lineTo(x2, y2);
							linesContext.stroke();
							actualX[actItt2]=x1;
							actItt2++;
						}
					}
					itt2++;
				}
			}
		}
	}
	console.log(actualY);
	console.log(actualX);
	
	var safety_margin = 5; // ignore pixels closer to margin than this value
	var estimate_cell_size = actualX[1] - actualX[0];

	var digit_as_28x28_matrix = [];
	for (var i = 0; i < 28; i++)
		for (var j = 0; j < 28; h++) 
			digit_as_28x28_matrix[i * 28 + j] = 0; // fill it with 0
		
	
	for (var i = 0; i < 9; i++){
		for (var j = 0; j < 9; j++){
			var imgData = originalPhotoContext.getImageData( actualX[i] + safety_margin, actualY[i] + safety_margin, estimate_cell_size - 2 * safety_margin, estimate_cell_size - 2 * safety_margin);
    		//tilesContext.putImageData(imgData, actualX[i], actualY[j]);
// compute bounding box of digit
			var bbox = {min_row: estimate_cell_size - 2 * safety_margin, min_col: estimate_cell_size - 2 * safety_margin, max_row:0, max_col: 0};
			for (var row = 0; row < estimate_cell_size - 2 * safety_margin; row++)
				for (var col = 0; col < estimate_cell_size - 2 * safety_margin; col++){
					var pixel_color = originalPhotoContext.getImageData(actualX[i] + safety_margin + col, actualY[i] + safety_margin + row, 1, 1);		
					if (pixel_color[0] < 100 && pixel_color[1] < 100 && pixel_color[2] < 100){ // black
						if (bbox.min_row > row)
							bbox.min_row = row;
						else
						if (bbox.max_row < row)
							bbox.max_row = row;

						if (bbox.min_col > col)
							bbox.min_col = col;
						else
						if (bbox.max_col < col)
							bbox.max_col = col;
							
					}
				}
				// I have the bounding box; now I have to scale the box to 20x20 as in MNIST
				for (var row = 0; row < 20; row++)
					for (var col = 0; col < 20; col++){
						var original_row = row / 19.0 * (bbox.max_row - bbox.min_row);
						var original_col = col / 19.0 * (bbox.max_col - bbox.min_col);
						var pixel_data = originalPhotoContext.getImageData(actualX[i] + safety_margin + original_row, actualY[i] + safety_margin + original_col, 1, 1); // I do not like this
						digit_as_28x28_matrix[(row + 4) * 28 + col + 4] = rgb_to_gray(pixel_data) / 255.0;
						
					}
				// send it to ann.js
				var out_last_layer = [];
				var class_index = test_ann(input, out_last_layer);
				tilesContext.fillText(class_index.toString(), 10, 50);
		}
	}
}
