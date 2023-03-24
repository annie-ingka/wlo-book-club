import range from './range';
import sum from './sum';

describe('CH4: The sum of a range', () => {
  test('TC 3: sum(range(1, 10))', () => {
    // Arrange

    // Act
    const result = sum(range(1, 10));

    // Assert
    expect(result).toBe(55);
  });
});
