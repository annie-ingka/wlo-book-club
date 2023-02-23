import countBs from './count-bs';

describe('CH3: Bean counting', () => {
  test('TC 1: countBs("BBC")', () => {
    // Arrange

    // Act
    const result = countBs('BBC');

    // Assert
    expect(result).toBe(2);
  });
});
