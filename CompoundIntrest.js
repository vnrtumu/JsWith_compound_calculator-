function age(givendate, principal, rate, type) {
  let total = 0;
  let interest = 0;
  var got = new Date(givendate.split("/").reverse().join("-"));

  var d1 = got.getDate();
  var m1 = 1 + got.getMonth();
  var y1 = got.getFullYear();

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  var duration =
    "Total Duration is " + y + " Years " + m + " Months " + d + " Days";
  //to convert rupee to percentage
  //   rate = 1.5 * 12;

  if (type == "simple") {
    interest = ((y * 360 + m * 30 + d) * rate * principal) / 3000;
  } else {
    let A = principal * Math.pow(1 + (rate * 12) / 100, y);
    let CI = A - principal;
    let remaining = ((m * 30 + d) * rate * A) / 3000;
    interest = CI + remaining;
  }

  total = interest + principal;

  return {
    duration,
    total,
    interest,
  };
}

console.log(age("24/6/2020", 1100000, 1.5, "Compound"));

// Devi reddy konda reddy
// 501747
// 357925
// ------
// 143822
// ------
