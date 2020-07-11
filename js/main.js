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
})();