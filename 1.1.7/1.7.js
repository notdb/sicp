function good_enough(guess, x) {
  return abs(square(guess) - x) < 0.001;
}

function abs(x) {
  return x >= 0 ? x : -x;
}

function square(x) {
  return x * x;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function sqrt_iter(guess, x, cache) {
  return good_enough_with_cache(guess, x, cache)
    ? guess
    : sqrt_iter(improve(guess, x), x, cache);
}

function sqrt(x) {
  let cache = [];
  return sqrt_iter(1, x, cache);
}

//sqrt(234092340950580209090890808089080809890834509834589022390)

//good_enough(.3, .9)

// An alternative strategy for implementing good_enough is to watch how guess changes from one iteration to the next and to stop when the change is a very small fraction of the guess. Design a square-root function that uses this kind of end test. Does this work better for small and large numbers?

function good_enough_with_cache(guess, x, cache) {
  let foo = 0;
  console.log(cache);
  cache.length == 0
    ? cache.push(guess)
    : cache[0] / guess == 1
    ? (foo = 1)
    : cache.pop() && cache.push(guess);
  console.log("cache", cache);
  console.log("guess", guess);
  console.log("next iteration", average(guess, x / guess));
  // do some division here
  return foo;
}

const error_threshold = 0.01;

function good_enough_2(guess, x) {
  return relative_error(guess, improve(guess, x)) < error_threshold;
}

function relative_error(estimate, reference) {
  return abs(estimate - reference) / reference;
}

function sqrt_iter_2(guess, x) {
  return good_enough_2(guess, x) ? guess : sqrt_iter_2(improve(guess, x), x);
}

function sqrt_2(x) {
  let cache = [];
  return sqrt_iter_2(1, x);
}

sqrt_2(23);
