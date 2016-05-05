var testUp = {
  testTitle: 'Тест по программированию',
  btnTitle: 'Проверить мои результаты',
  questions: [
    {
      title: 'Вопрос №1',
      answers: [
        {
          text: 'Вариант ответа №1 +',
          correct: true
        },
        {
          text: 'Вариант ответа №2 -',
          correct: false
        },
        {
          text: 'Вариант ответа №3 -',
          correct: false
        }
      ]
    },
    {
      title: 'Вопрос №2',
      answers: [
        {
          text: 'Вариант ответа №1 +',
          correct: true
        },
        {
          text: 'Вариант ответа №2 -',
          correct: false
        },
        {
          text: 'Вариант ответа №3 +',
          correct: true
        }
      ]
    },
    {
      title: 'Вопрос №3',
      answers: [
        {
          text: 'Вариант ответа №1 -',
          correct: false
        },
        {
          text: 'Вариант ответа №2 -',
          correct: false
        },
        {
          text: 'Вариант ответа №3 +',
          correct: true
        }
      ]
    },
    {
      title: 'Вопрос №4',
      answers: [
        {
          text: 'Вариант ответа №1 +',
          correct: true
        },
        {
          text: 'Вариант ответа №2 +',
          correct: true
        },
        {
          text: 'Вариант ответа №3 -',
          correct: false
        }
      ]
    }
  ]
};

var strTest = JSON.stringify(testUp);
localStorage.setItem('strTest', strTest);

$(function () {
  'use strict';
  var testData = JSON.parse(localStorage.getItem('strTest'));
  var html = $('.tests-form').html();
  var content = tmpl(html, testData);
  var $body = $('body');

  $body.append(content);

  var amountRight = 0;
  var amountBad = 0;
  var $modal;
  var $overlay;

  $('.test-btn').on('click', function (e) {

    var amountRightAnswers = 0;
    var amountCorrectAnswers =0;

    e.preventDefault();
    showModal();
    $overlay.one('click', hideModal);

    for (var i = 0; i < testData.questions.length; i++) {
      var input = $('input[data-index=' + i + ']');
      var question = testData.questions[i].title;
      var correctAmount = 0;
      var checkedElem = 0;

      for (var j = 0; j < testData.questions[i].answers.length; j++) {
        var elem = input[j];
        var answerVar = testData.questions[i].answers[j].correct;

        if (answerVar === true) {
          correctAmount += 1;
        }
        if ( elem.checked ) {
          if ( answerVar === true ) {
            amountRight += 1;
          } else {
            amountBad += 1;
          }
          checkedElem += 1;
        } else {
          amountBad += 1;
        }
        $(elem).removeAttr("checked");
      }

        if(correctAmount == amountRight && amountRight !== 0 &&
            amountBad != testData.questions[i].answers.length &&
            correctAmount == checkedElem) {
          $modal.append('<h2 class="right">' + question + '</h2>');
          amountRightAnswers += amountRight;
        } else {
          $modal.append('<h2 class="wrong">' + question + '</h2>');
        }

        amountCorrectAnswers += correctAmount;
        correctAmount = 0;
        amountRight = 0;
        amountBad = 0;

    }

    var rightStatistic = Math.round((amountRightAnswers/amountCorrectAnswers)*100);
    $modal.append('<h2>Правильных ответов - ' + rightStatistic + '%</h2>');

  });

  function showModal () {
    $modal = $('<div class="res-modal"><h1>Ваш результат :</h1></div>');
    $overlay = $('<div class="overlay-modal" title="Close results!"></div>');
    $body.append($overlay);
    $body.append($modal);
    $modal.animate({ top: "50%" }, 800);
  }
  function hideModal () {
    $modal.animate({ top: "-50%" }, 800, function () {
      $modal.remove();
      $overlay.remove();
    });
  }

});