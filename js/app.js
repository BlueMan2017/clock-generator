$(function() {
  let time = new Date();

  const $hour = $(".hours");
  const $minute = $(".minutes");
  const $second = $(".seconds");

  $second.html(
    time.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 })
  );
  $minute.html(
    time.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })
  );
  $hour.html(
    time.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 })
  );

  let s = time.getSeconds();
  let m = time.getMinutes();
  let h = time.getHours();

  function* generatorH() {
    h++;
    yield $hour.html(h.toLocaleString(undefined, { minimumIntegerDigits: 2 }));
    if (h === 12) {
      h = 0;
      $hour.html(h.toLocaleString(undefined, { minimumIntegerDigits: 2 }));
      yield* generatorS();
    }
  }

  function* generatorM() {
    m++;
    yield $minute.html(
      m.toLocaleString(undefined, { minimumIntegerDigits: 2 })
    );
    if (m === 59) {
      m = 0;
      $minute.html(m.toLocaleString(undefined, { minimumIntegerDigits: 2 }));
      yield* generatorH();
    }
  }

  function* generatorS() {
    for (s; s < 60; s++) {
      yield $second.html(
        s.toLocaleString(undefined, { minimumIntegerDigits: 2 })
      );
      if (s === 59) {
        s = 0;
        $second.html(s.toLocaleString(undefined, { minimumIntegerDigits: 2 }));
        yield* generatorM();
      }
    }
  }

  let gInvoke = generatorS();

  setInterval(function() {
    gInvoke.next();
  }, 1000);
});
