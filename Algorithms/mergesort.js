// sort the arrays
function mergeSort(array) {
  // base case
  if (array.length <= 1) {
    return array;
  }

  // half the array
  middle = Math.floor(array.length / 2);

  // divide into left and right
  left = array.slice(0, middle);
  right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// merge the arrays
function merge(left, right) {
  (sortedArray = []), (leftIndex = 0), (rightIndex = 0);

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArray.push(left[leftIndex]);
      // move the left cursor
      leftIndex++;
    } else {
      sortedArray.push(right[rightIndex]);
      // move the right cursor
      rightIndex++;
    }
  }

  return sortedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
