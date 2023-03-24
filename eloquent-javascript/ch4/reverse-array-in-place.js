function reverseArrayInPlace(array) {
  const copy = [...array];
  for (let i = 0; i < array.length; ++i) {
    array[i] = copy[array.length - 1 - i];
  }
}

export default reverseArrayInPlace;
