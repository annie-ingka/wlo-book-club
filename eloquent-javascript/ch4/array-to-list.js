function arrayToList(array) {
  const value = array.shift();
  return {
    value,
    rest: array.length === 0 ? null : arrayToList(array)
  };
}

export default arrayToList;
