function fibonacciRecursively(index = 1) {
  // so the sequence begins at 0
  if (index === 0) return 0;
  if (index < 3) return 1;
  return fibonacciRecursively(index - 1) + fibonacciRecursively(index - 2);
}

// to display from console:
for (i = 0; i <= 30; i++) {
  document.write("<br>Index " + i + " = " + fibonacciRecursively(i));
}
