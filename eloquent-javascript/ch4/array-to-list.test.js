import arrayToList from './array-to-list';

describe('CH4: A list', () => {
  test('TC 1: arrayToList([10, 20])', () => {
    // Arrange

    // Act
    const result = arrayToList([10, 20]);

    // Assert
    expect(result).toEqual({ value: 10, rest: { value: 20, rest: null } });
  });
});
