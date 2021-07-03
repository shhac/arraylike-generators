import 'jest';

import { concat } from './concat';
import { toGenerator } from './to-generator';

describe('iterator-sync concat', () => {
  test.each<number[][]>([
    [[], [], []],
    [[0], [], [0]],
    [[0], [0], []],
    [[0, 1], [0], [1]],
    [[1, 0], [1], [0]],
    [[0, 1, 2], [0], [1], [2]],
  ])('expect to get %p from concat(%p, %p)', (expected, ...arrs) => {
    const itrs = arrs.map((arr) => toGenerator(arr));
    const resultItr = concat(...itrs);
    expect([...resultItr]).toStrictEqual(expected);
  });
});
