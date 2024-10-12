function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const ls = mergeSort(arr.slice(0, mid));
  const rs = mergeSort(arr.slice(mid));

  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < ls.length && j < rs.length) {
    sortedArray.push(ls[i] <= rs[j] ? ls[i++] : rs[j++]);
  }

  sortedArray.push(...ls.slice(i), ...rs.slice(j));
  return sortedArray;
}

const x = mergeSort([56, 12, 89, 3, 45, 78, 23, 90, 17, 5, 34, 67, 2, 99, 11]);
console.log(x);
