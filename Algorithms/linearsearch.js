function linearSearch(array, itemToFind) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === itemToFind) return i;
  }
  return -1;
}
