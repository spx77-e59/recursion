// without recursion
function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

const x = fibs(8);
console.log(x);

function fibsRec(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
const y = fibsRec(6);
console.log(y);
