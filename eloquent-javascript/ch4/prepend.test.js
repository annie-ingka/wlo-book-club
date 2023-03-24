import prepend from './prepend';

describe('CH4: A list', () => {
  test('TC 3: prepend(10, prepend(20, null))', () => {
    // Arrange

    // Act
    const result = prepend(10, prepend(20, null));

    // Assert
    expect(result).toEqual({ value: 10, rest: { value: 20, rest: null } });
  });
});
