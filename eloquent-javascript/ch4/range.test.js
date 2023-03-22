import range from './range';

describe('CH4: The sum of a range', () => {
  test('TC 1: range(1, 10)', () => {
    // Arrange

    // Act
    const result = range(1, 10);

    // Assert
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('TC 2: range(5, 2, -1)', () => {
    // Arrange

    // Act
    const result = range(5, 2, -1);

    // Assert
    expect(result).toEqual([5, 4, 3, 2]);
  });
});
