import min from './min';

describe('CH3: Minimum', () => {
  test('TC 1: min(0, 10)', () => {
    // Arrange

    // Act
    const result = min(0, 10);

    // Assert
    expect(result).toBe(0);
  });

  test('TC 2: min(0, -10)', () => {
    // Arrange

    // Act
    const result = min(0, -10);

    // Assert
    expect(result).toBe(-10);
  });
});
