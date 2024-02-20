function findFloor(arr, num) {
  let high = arr.length - 1;
  let low = 0;
  let mid = Math.floor((high + low) / 2);

  if (arr.length === 0) {
    return -1;
  }

  if (num < arr[0]) {
    return -1;
  }

  if (num > arr[arr.length - 1]) {
    return arr[arr.length - 1];
  }

  while (high > low + 1) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      low = mid;
    } else if (num < arr[mid]) {
      high = mid;
    }
  }
  return arr[low];
}

module.exports = findFloor;
