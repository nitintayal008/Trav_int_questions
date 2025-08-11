function slidingWindow(arr, k) {
  var result = [];

  var maxi = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    maxi = 0;

    for (let j = i; j < i + 3; j++) {
      maxi = Math.max(maxi, arr[j]);
    }

    result.push(maxi);
  }

  return result;
}

console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
