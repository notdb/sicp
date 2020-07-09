// find out why good enough requires a cube for the guess as opposed to the square

function good_enough(guess, x) {
  console.log("foo " + abs(square(guess) - x));
  return abs(guess * guess * guess - x) < 0.0001;
}

function abs(x) {
  return x >= 0 ? x : -x;
}

function square(x) {
  return x * x;
}

function improve(guess, x) {
  console.log(guess);
  console.log(x);
  return average(guess * 2, x / square(guess));
}

function average(x, y) {
  return (x + y) / 3;
}

function cube_iter(guess, x) {
  return good_enough(guess, x) ? guess : cube_iter(improve(guess, x), x);
}

function cube(x) {
  return cube_iter(1, x);
}

cube(27);
