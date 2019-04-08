$(function() {
  const $hour = $(".hours");
  const $minute = $(".minutes");
  const $second = $(".seconds");
  let counter = 55;

  function* generatorM() {
    for (let i = 55; i < 60; i++) {
      yield $minute.html(i);
      if (i === 59) {
        i = 0;
      }
    }
  }

  $second.html(0);
  $minute.html(0);
  $hour.html(0);

  let s = 0;
  let m = 0;
  let h = 0;
  function* generatorS() {
    for (s = 0; s <= 5; s++) {
      yield $second.html(s);
      if (s === 5) {
        s = 0;
        m++;
        yield $minute.html(m);
        if (m === 5) {
          m = 0;
          h++;
          yield $hour.html(h);
          if (h === 5) {
            h = 0;
            yield* generatorS();
          }
        }
      }
    }
  }
  let gInvoke = generatorS();

  setInterval(function() {
    gInvoke.next();
  }, 1000);
});

/*FIRST TRY
const intSeconds = () => {
  let counter = 0;
  $second.text(counter);
  let interval = setInterval(function() {
    counter++;
    $second.text(counter);
    if (counter >= 59) {
      clearInterval(interval);
      counter = 0;
      $second.text(counter);
    }
    return counter;
  }, 1000);
  setTimeout(interval, 1000);
};

const intMinutes = () => {
  let counter = 1;
  $minute.text(counter);
  let interval = setInterval(function() {
    counter++;
    $minute.text(counter);
    if (counter >= 59) {
      clearInterval(interval);
      counter = 0;
      $minute.text(counter);
    }
    return counter;
  }, 60000);
  setTimeout(interval, 60000);
};

function* clock() {
  intSeconds();
  yield "yield 1 ran...";
  intMinutes();
  yield "yield 2 ran...";
}
let clockInvoke = clock();

clockInvoke.next();

setInterval(function() {
  clockInvoke.next();
}, 60000);
*/
