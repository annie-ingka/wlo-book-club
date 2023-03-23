function arrayToList(array) {
  const value = array.shift();
  return array.length === 0
    ? {
        value,
        rest: null
      }
    : {
        value,
        rest: arrayToList(array)
      };
}

export default arrayToList;
