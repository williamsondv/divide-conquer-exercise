function countZeroes(arr) {
  if (arr[arr.length - 1] === 1 || arr.length === 0) {
    return 0;
  }
  if (arr[0] === 0) {
    return arr.length;
  }

  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (left + 1 !== right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return arr.length - right;
}

module.exports = countZeroes;
