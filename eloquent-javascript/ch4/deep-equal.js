function deepEqual(obj1, obj2) {
  if (
    typeof obj1 !== typeof obj2 ||
    Object.keys(obj1).length !== Object.keys(obj2).length
  ) {
    return false;
  }

  return Object.keys(obj1).every((prop) => {
    const propExits = obj2[prop];
    if (!propExits) {
      return false;
    }
    const valueIsObject = obj1[prop] && typeof obj1[prop] === 'object';
    const propsHaveSameValue = valueIsObject
      ? deepEqual(obj1[prop], obj2[prop])
      : obj2[prop] === obj1[prop];

    return propsHaveSameValue;
  });
}

export default deepEqual;
