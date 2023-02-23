import countChar from './count-char';

describe('CH3: Bean counting', () => {
  test('TC 2: countChar("kakkerlak", "k")', () => {
    // Arrange

    // Act
    const result = countChar('kakkerlak', 'k');

    // Assert
    expect(result).toBe(4);
  });
});
