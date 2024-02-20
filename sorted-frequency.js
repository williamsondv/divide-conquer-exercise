function sortedFrequency(arr, num) {
  if (arr[findLowestIndex(arr, num)] !== num) {
    return -1;
  }

  if (findHighestIndex(arr, num) === findLowestIndex(arr, num)) {
    return 1;
  }

  return findHighestIndex(arr, num) - findLowestIndex(arr, num);
}

function findLowestIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] >= num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return mid;
}

function findHighestIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] <= num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return mid;
}

module.exports = sortedFrequency;
