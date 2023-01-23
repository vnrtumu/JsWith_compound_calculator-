function x() {
  for (var i = 0; i < 3; i++) {
    function y(i) {
      setTimeout(function () {
        console.log(i);
      }, 1000 + i);
    }
    y(i);
  }
}

x();
