function binarySearch(array, itemToSearch) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (array[middle] === itemToSearch) {
      return middle;
    }

    if (array[middle] < itemToSearch) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
