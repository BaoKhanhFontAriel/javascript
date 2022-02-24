// 1
function sumAvg(arr) {
  let sum = 0;
  arr.forEach(function (i) {
    sum += i;
  });
  console.log(sum / arr.length);
}

// 2
function findMax(arr) {
  let max = arr[0];
  arr.forEach((i) => {
    if (max < i) {
      max = i;
    }
  });
  console.log(max);
}

//3
function fibonaci(n) {
  let arr = new Array(n - 1);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
//4
function removeFalsy(arr) {
  return arr.filter(function (i) {
    return i == true;
  });
}

//5
function sortByColumn(arr, col) {
  arr.sort((row1, row2) => {
    return row1[col] - row2[col];
  });
  console.log(arr);
}

//6
function doubleArr(arr) {
  console.log(
    arr.map((value) => {
      return value ** 2;
    })
  );
}

//7
function capitalize(str) {
  console.log(str.toUpperCase());
}

sumAvg([1, 2, 3, 4, 5]);
findMax([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(fibonaci(6));
console.log(removeFalsy([0, 1, 0, 0, 1, 1]));
sortByColumn(
  [
    [2, 3, 9],
    [8, 4, 2],
    [6, 2, 7],
  ],
  0
);
doubleArr([1, 2, 3, 4]);
capitalize("totochan");
