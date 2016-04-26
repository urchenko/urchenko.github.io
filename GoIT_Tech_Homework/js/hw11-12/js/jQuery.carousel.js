(function ($) {

  $.fn.carousel = function () {

    var leftArrow = $('.carousel__arrow_left');
    var rightArrow = $('.carousel__arrow_right');
    var elementsList = $('.carousel__list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftArrow.click(function () {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += 125;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });

    rightArrow.click(function () {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 125;
        elementsList.animate({
          left: currentLeftValue + 'px'
        }, 500);
      }
    });

    return this;
  }

})(jQuery);