function compareName(name) {
	var result;

	compNameBreak:
	for (var i = 0; i < namesArray.length; i++) {
		if (name == namesArray[i]) {
			alert(namesArray[i] + ', вы успешно вошли!');
			break compNameBreak;
		} else {
			continue;
		}
		alert('Данное имя не найдено!');
	}	
}

var namesArray = [];

for (var i = 0; i < 5; i++) {
	namesArray[i] = prompt('Введите имя ' + (i+1), '');
}

var curentUserName = prompt('Введите имя пользователя:', '');

compareName(curentUserName);

