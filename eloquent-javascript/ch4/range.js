function range(start, end, step = 1) {
  const result = [];
  for (let i = start; start < end ? i <= end : i >= end; i += step) {
    result.push(i);
  }
  return result;
}

export default range;
