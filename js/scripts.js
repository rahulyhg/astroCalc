/* defines the constants */
var G;
var c;

var precision = 5;

var equations;

function loadPage(){
	// reads the values of constants
	G = parseFloat(document.getElementById("GravConstant").value);
	c = parseFloat(document.getElementById("LightSpeed").value);
	
	equations = [(2*G/Math.pow(c, 2)).toPrecision(precision),
	G];
}

function changeColor(elements, status){
   for(i=0; i<elements.length; i++){
  	 if (status==0){
   		elements[i].style.borderBottomColor = '';
   	} else if(status == 1){
   		elements[i].style.borderBottomColor = 'rgb(85, 170, 85)';
   	} else if(status == 2){
			elements[i].style.borderBottomColor = 'rgb(170, 85, 85)';
		} else if (status == 3){
			elements[i].style.borderBottomColor = 'rgb(170, 170, 85)';
		}
	}
}

/* this equation returns:
* -1 when all the inputs are void;
* n when all the n boxes are not void
*/
function verifyVar(variables){
	var rtrn = -1;
		
	for(i=0; i<variables.length; i++){
		variables[i].value = variables[i].value == "" ? "" : parseFloat(variables[i].value).toPrecision(precision);
		rtrn = variables[i].value != "" ? rtrn + i + 1 : rtrn;
	}
	
	rtrn == -1 ? changeColor(variables, 3) : changeColor(variables, 0);
	
	variables[variables.length] = rtrn;
	return(variables);
}


function calculate(id){
	var variables = new Array();
	
	switch(id){
	case 1: // Schwarzschild Radius
		variables[0] = document.getElementById("SchwRadius");
		variables[1] = document.getElementById("ScwhMass");
		
		verifyVar(variables);
		
		variables[variables.length] = equations[id - 1];
		
		schwRadius(variables);
		break;
		
	case 2:
		variables[0] = document.getElementById("GravForce");
		variables[1] = document.getElementById("GravMass1");
		variables[2] = document.getElementById("GravMass2");
		variables[3] = document.getElementById("GravRadius");
		
		verifyVar(variables);
		
		variables[variables.length] = equations[id - 1];
		
		gravForce(variables);
		break;
		
	default:
		break;
	}
}

/* here begins the equations calculations */

function schwRadius(variables){
	var test = variables[variables.length -2];
	
	if(test == 0){
		variables[1].value = parseFloat(variables[0].value / variables[variables.length - 1]).toPrecision(precision);
	} else if(test == 1){
		variables[0].value = parseFloat(variables[1].value * variables[variables.length - 1]).toPrecision(precision);
	} else if(test == 2){
		 parseFloat(variables[0].value).toPrecision(precision) == (variables[1].value * variables[variables.length - 1]).toPrecision(5)
		 ? changeColor([variables[0], variables[1]], 1)
		: changeColor([variables[0], variables[1]], 2);
	}
}

function gravForce(variables){
	var test = variables[variables.length -2];
	
	if(test == 5){
		alert("m1");
	} else if(test == 6){
		alert("m2");
	} else if(test == 7){
		alert("r");
	} else if(test == 8){
		alert("Fg");
		
		//variables[0].value = 
			alert(parseFloat(variables[1].value * variables[2].value /
			Math.pow(variables[3].value, 2) * variables[variables.length -1].value));
	} else if(test == 9){
		alert("verificar");
	} else{
		
	}
}