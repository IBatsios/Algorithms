function binarySearch(array, itemToSearch) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (array[middle] === itemToSearch) {
      // adding one to the middle so first index is 1 and not 0
      return middle + 1;
    }

    if (array[middle] < itemToSearch) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
