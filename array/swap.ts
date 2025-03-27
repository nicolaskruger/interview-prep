// Complete the minimumSwaps function below.
function minimumSwaps(arr: number[]) {
  let swaps = 0;
  const swap = (i: number, j: number) => {
    const hold = arr[i];
    arr[i] = arr[j];
    arr[j] = hold;
  };
  arr = arr.map((_) => --_);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      swap(i, arr[i]);
      swaps++;
    }
  }
  return swaps;
}
