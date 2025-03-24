// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    var swaps = 0;
    var swap = function (i, j) {
        var hold = arr[i];
        arr[i] = arr[j];
        arr[j] = hold;
    };
    arr = arr.map(function (_) { return --_; });
    for (var i = 0; i < arr.length; i++) {
        while (arr[i] !== i)
          {
            swap(i, arr[i]);
            swaps++;
          }
    }
    return swaps;
}

// [2, 3, 4, 1, 5]
// [3, 2, 4, 1, 5]
// [4, 2, 3, 1, 5]


// [3, 2, 4, 1, 5]
// [3, 2, 1, 4, 5]