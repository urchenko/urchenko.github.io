var testUp = {
	testTitle: 'Тест по программированию',
	btnTitle: 'Проверить мои результаты',
	questions: [
		{
			title: 'Вопрос №1',
			answers: [
				{
					text: 'Вариант ответа №1',
					correct: true
				},
				{
					text: 'Вариант ответа №2',
					correct: false 
				},
				{
					text: 'Вариант ответа №3',
					correct: false 
				}
			]
		},
		{
			title: 'Вопрос №2',
			answers: [
				{
					text: 'Вариант ответа №1',
					correct: true
				},
				{
					text: 'Вариант ответа №2',
					correct: false 
				},
				{
					text: 'Вариант ответа №3',
					correct: false 
				}
			]
		},
		{
			title: 'Вопрос №3',
			answers: [
				{
					text: 'Вариант ответа №1',
					correct: true
				},
				{
					text: 'Вариант ответа №2',
					correct: false 
				},
				{
					text: 'Вариант ответа №3',
					correct: false 
				}
			]
		}
	],
	createElement: function (tagName, className, innerHtml) {
		var element = document.createElement(tagName);
		element.className = className;
		element.innerHTML = innerHtml;

		return element;
	},
	addElement: function (element, parentElement) {
		parentElement.appendChild(element);
	},
	addElementFirst: function (element, parentElement) {
		parentElement.insertBefore(element, parentElement.firstChild);
	},
	generateWrapper: function () {
		var element = this.createElement('div', 'wrapper container', '');

		this.addElementFirst(element, document.body);
	},
	generateForm: function () {
		var element = this.createElement('form', 'test-form row', '');
		var parent = document.body.querySelector('div.wrapper');

		element.setAttribute('action', '#');
		this.addElement(element, parent)
	},
	generateFormTitle: function () {
		var element = this.createElement('h2', 'test-title col-md-12', this.testTitle);

		this.addElementFirst( element, document.body.querySelector('form.test-form') ); 
	},
	generateQuestions: function() {
		for (var i = 0; i < this.questions.length; i++) {
			var question = this.questions[i];
			var wrapp = this.createElement('div', 'question-box col-md-12', '');
			var element = this.createElement('h3', 'box-title', i+1 + '. ' + question.title);
			
			this.addElement( wrapp, document.body.querySelector('form.test-form') );
			this.addElement(element, wrapp);

			for (var j = 0; j < question.answers.length; j++) {
				var answer = question.answers[j];
				var label = this.createElement('label', 'answer-label', ' ' + answer.text);
				var answerVar = this.createElement('input', 'answer-chekbox', '');

				answerVar.setAttribute('type', 'checkbox');
				this.addElement(label, wrapp);
				this.addElementFirst(answerVar, label);
			}
		}
	},
	generateBtn: function () {
		var element = this.createElement('input', 'test-btn btn btn-primary btn-lg col-md-12', '');

		element.setAttribute('type', 'submit');
		element.setAttribute('value', this.btnTitle);
		this.addElement( element, document.body.querySelector('form.test-form') );
	},

}

testUp.generateWrapper();
testUp.generateForm();
testUp.generateFormTitle();
testUp.generateQuestions();
testUp.generateBtn();