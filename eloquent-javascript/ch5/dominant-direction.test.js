import dominantDirection from './dominant-direction';

describe('CH5: Dominant writing direction', () => {
  test('TC 1: dominantDirection("Hello!")', () => {
    // Arrange

    // Act
    const result = dominantDirection('Hello!');

    // Assert
    expect(result).toBe('ltr');
  });

  test('TC 2: dominantDirection("Hey, مساء الخير")', () => {
    // Arrange

    // Act
    const result = dominantDirection('Hey, مساء الخير');

    // Assert
    expect(result).toBe('rtl');
  });
});
