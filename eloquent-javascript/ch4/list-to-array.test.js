import arrayToList from './array-to-list';
import listToArray from './list-to-array';

describe('CH4: A list', () => {
  test('TC 2: listToArray(arrayToList([10, 20, 30]))', () => {
    // Arrange

    // Act
    const result = listToArray(arrayToList([10, 20, 30]));

    // Assert
    expect(result).toEqual([10, 20, 30]);
  });
});
