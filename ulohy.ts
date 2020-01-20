const input = [
  [1, 2],
  [4, 5, 1, 1],
  [1],
  [5, 6, 7, 8, 9]
];

const input1 = [

];

const input2 = null;

const result = getLengthOfMissingArray(input2);
console.log(result);

function sumUpToNumberN(n: number): number {
  return n > 0 ? n + sumUpToNumberN(n - 1) : 0;
}

function getLengthOfMissingArray(array: any[] = []): number {
  return array && array.length ? (function () {
    const lengths = array.map(a => a.length);
    const maxLength = lengths.reduce((a, c) => Math.max(a, c));
    const currentLengthsSum = lengths.reduce((a, c) => a + c);

    return sumUpToNumberN(maxLength) - currentLengthsSum;
  })() : 0;
}