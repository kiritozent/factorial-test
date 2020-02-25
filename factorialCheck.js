
const findTrailingZero = (N) => {
  if (N < 0) return 0;

  let count = 0;

  for (let i = 5; (N / i) >= 1; i *= 5) {
    count += parseInt(N / i);
  }

  return count;
}

module.exports = findTrailingZero
