import { jest } from '@jest/globals';
import loop from './loop';

describe('CH5: Your own loop', () => {
  test('TC 1: flattening(arrays)', () => {
    // Arrange
    console.log = jest.fn();

    // Act
    loop(
      3,
      (n) => n > 0,
      (n) => n - 1,
      console.log
    );

    // Assert
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log.mock.calls).toEqual([[3], [2], [1]]);
  });
});
