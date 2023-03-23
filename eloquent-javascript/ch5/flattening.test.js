import flattening from './flattening';

describe('CH5: Flattening', () => {
  test('TC 1: flattening(arrays)', () => {
    // Arrange
    const arrays = [[1, 2, 3], [4, 5], [6]];

    // Act
    const result = flattening(arrays);

    // Assert
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
