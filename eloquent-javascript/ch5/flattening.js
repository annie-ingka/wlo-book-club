function flattening(arrays) {
  return arrays.reduce((prev, curr) => {
    return prev.concat(curr);
  });
}

export default flattening;
