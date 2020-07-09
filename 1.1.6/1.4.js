function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

//a_plus_abs_b(5, -4);

/*
a_plus_abs_b is a function that takes two numbers and adds them together, the second number (b) is taken the absolute value of first before they're added

line 5 is basically checking to see if it (the ternary statement), should return plus(a,b) or minus(a,b)

I didn't think to return functions out of a ternary like that, it's pretty interesting
*/

// ternary return example

const testFun = (a, b) => {
  return a + b;
};
function minus1(a, b) {
  return a - b;
}

function a_plus_abs_b1(a, b) {
  console.log((b >= 0 ? testFun : minus1)(a, b));
}

a_plus_abs_b1(5, -4);

/* so you can literally return a straight up function  (no call, just the named function) in a ternary */
