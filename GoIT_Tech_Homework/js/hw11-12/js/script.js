$(function () {
  $('.carousel').carousel();

  var html = $('.user-profile').html();
  var body = $('body');

  var userData = {
      fio: 'Юрченко Максим Александрович',
      photo: 'img/ava.png',
      prevPosition: 'Инженер-программист(гос-учериждение)',
      goal: 'Хочу учить фронтенд, потому что:',
      rationale1: 'Скучно и не интересно',
      rationale2: 'Работа не благодарная',
      rationale3: 'Приходиться заправлять картриджи',
      tel: '+380965525990',
      fb: 'https://www.facebook.com/urchenkomaksim',
      feadback: 'Смогу сверстать сайт, уже скоро'
    };
/*Simple JavaScript Templating John Resig*/
  var content = tmpl(html, userData);

  body.append(content);

/*-----LoDash-----*/
  var template = _.template('<p class="bonus">BONUS</p>' + html);
  var contentLow = template(userData);

  body.append(contentLow);

});