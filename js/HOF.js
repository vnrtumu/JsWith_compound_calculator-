/* ++++++++++++++ High Order Function +++++++++++++ */

/* A function which takes another function as an argument or returns function from it. */

function x() {
  console.log("Hello World!");
}

/* in this case 
    "Y" is the Higher order Function 
    & 
    "X" is the Callback function 
*/
function y(x) {
  x();
}
