window.onload = function () {
  var element = document.querySelectorAll('.dropdown');

  for(var i = 0; i < element.length; i++) {
    element[i].addEventListener('mouseover', function () {
   
     this.querySelector('.submenu').style.display = 'block';
     // if (this.style.opacity == 0) { 
     slideDown(this, 1000);
     // } 
    });
    element[i].addEventListener('mouseout', function () {
     // console.log(this);
     this.querySelector('.submenu').style.display ='none';
     // slideUp();
    });
  }

function slideDown(el, duration) {
  // debugger;
  var startOpacity = el.style.opacity;
  var time = 0;
  var fps = 25;

  var interval = setInterval( function () {
    
    if (time >= duration) {
      clearInterval(interval);
    }

    startOpacity += 1/(duration/fps);
    time += duration/fps;
    el.style.opacity = startOpacity;
  }, duration/fps);
}
}
