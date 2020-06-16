// input index of location you want and it returns what the value is at that location
function fibonacciMemoized(index = 0, cache = [0, 1, 1]) {
  if (cache[index]) return cache[index];
  // this sets the first location as 0
  if (index < 3) return 0;
  return (
    fibonacciMemoized(index - 1, cache) + fibonacciMemoized(index - 2, cache)
  );
}

// to display from console:
for (i = 0; i <= 30; i++) {
  document.write("<br>Index " + i + " = " + fibonacciMemoized(i));
}
