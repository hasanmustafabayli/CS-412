
function* fibonacciGenerator() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function* evenFibonacciGenerator() {
  const fibonacci = fibonacciGenerator();
  while (true) {
    const num = fibonacci.next().value;
    if (num % 2 === 0) {
      yield num;
    }
  }
}

const evenFibs = evenFibonacciGenerator();
for (let i = 0; i < 6; i++) {
  console.log(evenFibs.next().value);
}
