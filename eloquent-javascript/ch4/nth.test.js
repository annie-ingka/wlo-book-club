import arrayToList from './array-to-list';
import nth from './nth';

describe('CH4: A list', () => {
  test('TC 4: nth(arrayToList([10, 20, 30]), 1)', () => {
    // Arrange

    // Act
    const result = nth(arrayToList([10, 20, 30]), 1);

    // Assert
    expect(result).toBe(20);
  });
});
