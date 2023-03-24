import { everyWithLoop, everyWithSome } from './every';

describe('CH5: Everything', () => {
  test('TC 1: every([1, 3, 5], n => n < 10)', () => {
    // Arrange

    // Act
    const result1 = everyWithLoop([1, 3, 5], (n) => n < 10);
    const result2 = everyWithSome([1, 3, 5], (n) => n < 10);

    // Assert
    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  test('TC 2: every([2, 4, 16], n => n < 10)', () => {
    // Arrange

    // Act
    const result1 = everyWithLoop([2, 4, 16], (n) => n < 10);
    const result2 = everyWithSome([2, 4, 16], (n) => n < 10);

    // Assert
    expect(result1).toBe(false);
    expect(result2).toBe(false);
  });

  test('TC 3: every([], n => n < 10)', () => {
    // Arrange

    // Act
    const result1 = everyWithLoop([], (n) => n < 10);
    const result2 = everyWithSome([], (n) => n < 10);

    // Assert
    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });
});
