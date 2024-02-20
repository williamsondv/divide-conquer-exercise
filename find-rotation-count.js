function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  if (arr[left] < arr[right]) {
    return 0;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

module.exports = findRotationCount;
