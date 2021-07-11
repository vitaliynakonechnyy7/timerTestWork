function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  //

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(function () { startTime() }, 500);
}


var x = document.getElementById("toggleText");
    function toggleTextButton() {
      if (x.innerHTML === "Start") {
        x.innerHTML = "Stop";
      } else {
        x.innerHTML = "Start";
        stopCount();
      }
    }


    var count = 1;       // счет начинаем с 1
    var time;           // переменная определяет промежуток в 1 сек
    var timer_is_on = 0;// таймер выключен

    //
    function timedCount() {
      // елемент секонд = сумме в переменной count
      document.getElementById("second").innerHTML = count;
      // каждыйраз когда функ timedCount() выполняется к сущ счету +1
      count = count + 1;
      // перем time функция
      time = setTimeout(timedCount, 1000);
    }

    function startCount() {
      if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
      }
    }

    function stopCount() {
      clearTimeout(time);
      timer_is_on = 0;
    }

    function resetCount() {
      this.count = 0;
      document.getElementById('second').innerHTML = 0;
      stopCount();
      x.innerHTML = "Start";
    }
