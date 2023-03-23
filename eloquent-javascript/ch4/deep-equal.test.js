import deepEqual from './deep-equal';

describe('CH4: Deep comparison', () => {
  test('TC 1: listToArray(arrayToList([10, 20, 30]))', () => {
    // Arrange
    let obj = { here: { is: 'an' }, object: 2 };

    // Act
    const result = deepEqual(obj, obj);

    // Assert
    expect(result).toBe(true);
  });

  test('TC 2: deepEqual(obj, {here: 1, object: 2})', () => {
    // Arrange
    let obj = { here: { is: 'an' }, object: 2 };

    // Act
    const result = deepEqual(obj, { here: 1, object: 2 });

    // Assert
    expect(result).toBe(false);
  });

  test('TC 3: deepEqual(obj, {here: {is: "an"}, object: 2})', () => {
    // Arrange
    let obj = { here: { is: 'an' }, object: 2 };

    // Act
    const result = deepEqual(obj, { here: { is: 'an' }, object: 2 });

    // Assert
    expect(result).toBe(true);
  });
});
