var namesArray = [];

for (var i = 0; i < 5; i++) {
	namesArray[i] = prompt('Введите имя ' + (i+1), '');
}

var curentUserName = prompt('Введите имя пользователя:', '');

compareNameInArray(curentUserName, namesArray);

/*----- functions -----*/
function compareNameInArray(name, array) {
	for (var i = 0; i < array.length; i++) {
		if (name == array[i]) {
			alert(array[i] + ', вы успешно вошли!');
			break;
		} else if ( i == array.length - 1 ) {	
		    alert('Данное имя не найдено!');
		}
	}
}