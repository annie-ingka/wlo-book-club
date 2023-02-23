export default function isEven(n) {
  const num = Math.abs(n); // converts negative numbers
  if (num < 2) {
    return num === 0;
  }
  return isEven(num - 2);
}
