window.onload = function () {
  var element = document.querySelectorAll('.dropdown');

  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('mouseover', function () {

       slideDown(this.querySelector('.submenu'), 1000);

    });

    element[i].addEventListener('mouseout', function () {

     slideUp(this.querySelector('.submenu'), 1000);

    });
  }

  function slideDown(el, duration) {

    var time = 0;
    var fps = 25;

    el.style.visibility = 'visible';

    var interval = setInterval( function () {
      var startOpacity = +getComputedStyle(el).opacity;

      if (time > duration) {
        clearInterval(interval);
      }

      startOpacity += 1/fps;
      time += duration/fps;
      el.style.opacity = startOpacity;
    }, 40);
  }
    function slideUp(el, duration) {
      var time = 0;
      var fps = 25;

      var interval = setInterval( function () {
        var startOpacity = +getComputedStyle(el).opacity;

        if (time > duration) {
          clearInterval(interval);
        }

        startOpacity -= 1/fps;
        time += duration/fps;
        el.style.opacity = startOpacity;

        if (startOpacity <= 0) {
          el.style.visibility = 'hidden';
        }
    }, 40);
  }
}