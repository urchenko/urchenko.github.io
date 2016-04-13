$(function () {

  var $tabs = $('.item__link');
  var $content = $('.tabs__content');
  var $inputs = $('.tooltips__ifild');
  var $tooltips = $('.tooltips__tip');
  var $tipsBtn = $('.tooltips__btn');

  $tabs.on('click', function (e) {
    var index = $tabs.index(this);
    e.preventDefault();

    $('.item__link_active').removeClass('item__link_active');
    $(this).addClass('item__link_active');

    $content.removeClass('tabs__content_active');
    $($content[index]).addClass('tabs__content_active');
  });

  $inputs.hover(function () {
    var index = $inputs.index(this);
    $($tooltips[index]).fadeIn(500);
  },
  function () {
    var index = $inputs.index(this);
    $($tooltips[index]).fadeOut(500);
  });

  $($tipsBtn).on('click', function (e) {
    e.preventDefault();
    $($tooltips).fadeIn(500);
  });

});