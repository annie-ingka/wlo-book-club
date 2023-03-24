import reverseArray from './reverse-array';

describe('CH4: Reversing an array', () => {
  test('TC 1: reverseArray(["A", "B", "C"])', () => {
    // Arrange

    // Act
    const result = reverseArray(['A', 'B', 'C']);
    // Assert
    expect(result).toEqual(['C', 'B', 'A']);
  });
});
