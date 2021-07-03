import 'jest';
import { intersection } from './intersection';

describe('intersection', () => {
  test.each([
    [[], [], []],
    [[0], [], []],
    [[], [0], []],
    [[0], [0], [0]],
    [[0], [1], []],
    [[1], [0], []],
    [[1], [1], [1]],
    [[0, 0], [0], [0]],
    [[0, 1], [0], [0]],
    [[1, 0], [0], [0]],
    [[1, 1], [0], []],
    [[0], [0, 0], [0]],
    [[0], [0, 1], [0]],
    [[0], [1, 0], [0]],
    [[0], [1, 1], []],
    [[0, 0], [0, 0], [0, 0]],
    [[0, 0], [0, 1], [0]],
    [[0, 0], [1, 0], [0]],
    [[0, 0], [1, 1], []],
    [[0, 1], [0, 0], [0]],
    [[0, 1], [0, 1], [0, 1]],
    [[0, 1], [1, 0], [0, 1]],
    [[0, 1], [1, 1], [1]],
    [[1, 0], [0, 0], [0]],
    [[1, 0], [0, 1], [1, 0]],
    [[1, 0], [1, 0], [1, 0]],
    [[1, 0], [1, 1], [1]],
    [[1, 1], [0, 0], []],
    [[1, 1], [0, 1], [1]],
    [[1, 1], [1, 0], [1]],
    [[1, 1], [1, 1], [1, 1]],
  ])('expect intersection(%p, %p) to be %p', (a, b, expected) => {
    const result = intersection(a, b);
    expect(result).toStrictEqual(expected);
  });

  test.each([
    [['0'], [], []],
    [[], ['0'], []],
    [['0'], ['0'], ['0']],
  ])('expect intersection(%p, %p) to be %p', (a, b, expected) => {
    const result = intersection(a, b);
    expect(result).toStrictEqual(expected);
  });

  test.each([
    [['1'], [1], []],
    [[1], ['1'], []],
    [[1, '1'], ['1'], ['1']],
    [[1, '1'], [1], [1]],
  ])('expect intersection(%p, %p) to be %p', (a, b, expected) => {
    const result = intersection<string | number, string | number>(a, b);
    expect(result).toStrictEqual(expected);
  });
});
