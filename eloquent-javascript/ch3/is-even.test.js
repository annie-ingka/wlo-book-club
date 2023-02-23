import isEven from './is-even';

describe('CH3: Recursion', () => {
  test('TC 1: isEven(50)', () => {
    // Arrange

    // Act
    const result = isEven(50);

    // Assert
    expect(result).toBe(true);
  });

  test('TC 2: isEven(75)', () => {
    // Arrange

    // Act
    const result = isEven(75);

    // Assert
    expect(result).toBe(false);
  });

  test('TC 3: isEven(-1)', () => {
    // Arrange

    // Act
    const result = isEven(-1);

    // Assert
    expect(result).toBe(false);
  });
});
