let testUp = {
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

let strTest = JSON.stringify(testUp);
localStorage.setItem('strTest', strTest);

$( () => {
  let testData = JSON.parse(localStorage.getItem('strTest'));
  let html = $('.tests-form').html();
  let content = tmpl(html, testData);
  let $body = $('body');

  $body.append(content);

  let amountRight = 0;
  let amountBad = 0;
  let $modal;
  let $overlay;
  let i = 0;

  $('.test-btn').on('click', (e) => {

    let amountRightAnswers = 0;
    let amountCorrectAnswers =0;

    e.preventDefault();
    showModal();
    $overlay.one('click', hideModal);

    for (let questions of testData.questions) {
      let input = $('input[data-index=' + i + ']');
      let question = questions.title;
      let correctAmount = 0;
      let checkedElem = 0;
      let j = 0;

      for (let answers of questions.answers) {
        let elem = input[j];
        let answerVar = answers.correct;

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
        j++;
      }

        if(correctAmount == amountRight && amountRight !== 0 &&
            amountBad != questions.answers.length &&
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
        i++;
    }
    i = 0;

    let rightStatistic = Math.round((amountRightAnswers/amountCorrectAnswers)*100);
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
    $modal.animate({ top: "-50%" }, 800, () => {
      $modal.remove();
      $overlay.remove();
    });
  }
});