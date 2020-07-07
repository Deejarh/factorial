function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i = -i) {
    result *= i;
  }
  // eslint-disable-next-line no-console
  console.log(result);
}
factorial(3);
