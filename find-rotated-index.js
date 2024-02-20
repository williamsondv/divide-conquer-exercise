function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      if (num > arr[mid] || num < arr[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (num < arr[mid] || num > arr[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
