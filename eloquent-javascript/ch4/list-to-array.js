function listToArray(list, array = []) {
  array.push(list.value);
  return list.rest ? listToArray(list.rest, array) : array;
}

export default listToArray;
