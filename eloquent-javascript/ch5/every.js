export function everyWithLoop(array, test) {
  for (const element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

export function everyWithSome(array, test) {
  return !array.some((element) => !test(element));
}
