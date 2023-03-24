function reverseArray(array) {
  const result = [];
  for (const x of array) {
    result.unshift(x);
  }
  return result;
}

export default reverseArray;
