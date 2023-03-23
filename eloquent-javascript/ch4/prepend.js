function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

export default prepend;
