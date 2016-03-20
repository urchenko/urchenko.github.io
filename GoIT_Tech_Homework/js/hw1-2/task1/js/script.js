do {
var base = prompt('Введите число:', '');
var exponent = prompt('Введите степень:', '');
} while( !(isNumeric(base) && isNumeric(exponent)) );

if(exponent < 0) {
	alert('Степень ' + exponent + 
			'не поддерживается, введите целую степень, большую 0');
} else {
	console.log( pow(base, exponent) );
}

/*----- functions -----*/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function pow(base, exponent) {
	var result = 1;

	for (var i = 0; i < exponent; i++) {
		result *= base;
	}

	return result;
}