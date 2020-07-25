(function() {
  'use strict';

  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var reset = document.getElementById('reset');
  var result = document.getElementById('result');

  btn.addEventListener('click', function() {
    var payless;
    var short;
    var paymore;
    var over;
    var str;

    payless = Math.floor(price.value / num.value / unit.value) * unit.value;
    short = price.value - (payless * num.value);
    paymore = Math.ceil(price.value / num.value / unit.value) * unit.value;
    over = Math.abs(price.value - (paymore * num.value));
    str = 
      '一人' + payless + '円だと' + short + '円足りません' +
      '一人' + paymore + '円だと' + over+ '円余ります'
  }); 

  var timer = document.getElementById('timer')
  var min = document.getElementById('min')
  var sec = document.getElementById('sec')
  var reset = document.getElementById('reset')
  var start = document.getElementById('start')

  var startTime;
  var timeLeft;
  var timeToCountDown = 0;
  var timerId;

  function updateTimer(t) {
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
    timer.textContent = m + ':' + s + '.' + ms;
  }

  function countDown() {
    timerId = setTimeout(function() {
      timeLeft = timeToCountDown - (Date.now() - startTime);
      // console.log(timeLeft);
      if (timeLeft < 0) {
        clearTimeout(timerId);
        timeLeft = 0;
        timeToCountDown = 0;
        updateTimer(timeLeft);
        return;
      }
      updateTimer(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click', function()){
    startTime = Date.now();
    countDown();
  });

  min.addEventListener('click', function() {
    timeToCountDown += 60 * 1000;
    updateTimer(timeToCountDown);
  });

  sec.addEventListener('click', function() {
    timeToCountDown += 1000;
    updateTimer(timeToCountDown);
  });

  reset.addEventListener('click', function() {
    timeToCountDown = 0;
    updateTimer(timeToCountDown);
  });
  
});