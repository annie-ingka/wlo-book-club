function loop(value, testFn, updateFn, bodyFn) {
  if (!testFn(value)) {
    return;
  }
  bodyFn(value);
  loop(updateFn(value), testFn, updateFn, bodyFn);
}

export default loop;
