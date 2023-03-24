function countBy(items, groupDirection) {
  const counts = [];
  for (let item of items) {
    const direction = groupDirection(item);
    const index = counts.findIndex((c) => c.direction === direction);
    if (index === -1) {
      counts.push({ direction, count: 1 });
    } else {
      counts[index].count++;
    }
  }
  return counts;
}
export default countBy;
