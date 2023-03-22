import reverseArrayInPlace from './reverse-array-in-place';

describe('CH4: Reversing an array', () => {
  test('TC 2: reverseArrayInPlace(arrayValue)', () => {
    // Arrange
    let arrayValue = [1, 2, 3, 4, 5];

    // Act
    reverseArrayInPlace(arrayValue);
    // Assert
    expect(arrayValue).toEqual([5, 4, 3, 2, 1]);
  });
});
