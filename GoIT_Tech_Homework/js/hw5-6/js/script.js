var clockFace = document.querySelector('.clockFace');
var startPauseBtn = document.querySelector('.startPause');
var splitBtn = document.querySelector('.split');
var clearBtn = document.querySelector('.clear');
var watch = new Stopwatch(clockFace, startPauseBtn);

startPauseBtn.addEventListener( 'click', watch.startPause.bind(watch) );

splitBtn.addEventListener( 'click', watch.split.bind(watch, 'Split') );

clearBtn.addEventListener( 'click', watch.reset.bind(watch) );

function Stopwatch(elem, toogleBtn) {
  var time = 0;
  var interval;
  var offset;
  var count = 1;

  this.isOn = false;

  this.startPause = function () {
    if(!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
      toogleBtn.innerHTML = 'Stop';
    } else {
      this.split('Stop');
      clearInterval(interval);
      interval = null;
      this.isOn = false;
      toogleBtn.innerHTML = 'Start';
    }
  };

  this.split = function (stopOrSplit) {
    if (this.isOn) {
      var timePassed = delta();
      time += timePassed;
      var formatedTime = timeFormatter(time);
      var newElement = document.createElement('h4');
      var parent = document.body.querySelector('.wrapper');
      newElement.className = 'splitWrapp bg-success col-md-6 col-md-offset-3 col-sm-12 col-xs-12';
      newElement.innerHTML = count + ' ' + stopOrSplit + ': ' + formatedTime;

      parent.appendChild(newElement);

      count++;
    }
  };

  this.reset = function () {
    time = 0;
    update();
    this.isOn = false;
    removeSplitElements();
  };

  function update() {
    if (this.isOn) {
      var timePassed = delta();
      time += timePassed;
    }

    var formatedTime = timeFormatter(time);
    elem.innerHTML = formatedTime;
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
    var dateTime = new Date(timeInMilliseconds);
    var hours = dateTime.getUTCHours().toString();
    var minutes = dateTime.getMinutes().toString();
    var seconds = dateTime.getSeconds().toString();
    var milliseconds = dateTime.getMilliseconds().toString();

    if (hours.length < 2) {
      hours = '0' + hours;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    if (milliseconds.length < 3) {
      if (milliseconds.length == 1) {
        milliseconds = '00' + milliseconds;
      } else {
        milliseconds = '0' + milliseconds;
      }
    }

    return hours + ' : ' + minutes + ' : ' + seconds + ' . ' + milliseconds;
  }

  function removeSplitElements() {
    var splitElem = document.querySelectorAll('.splitWrapp');
    var parent = document.body.querySelector('.wrapper');

    for (var i = 0; i < splitElem.length; i++) {
      parent.removeChild(splitElem[i]);
    }

    count = 1;
  }

}