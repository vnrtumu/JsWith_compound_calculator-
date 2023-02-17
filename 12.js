const { isNumber } = require("lodash");

function accBalanceUpdate(debit) {
  const prevBal = 400;
  if (isNumber(debit)) {
    return (newBal = 400 - debit);
  } else {
    return "Please give valid number";
  }
}

console.log(accBalanceUpdate("100"));
