import 'jest';

import { map } from './map';
import { toGenerator } from './to-generator';

describe('iterator-sync map', () => {
  test.each<[number[], number[]]>([
    [[], []],
    [[0], [0]],
    [[0, 0], [0, 0]],
    [[0, 0, 0], [0, 0, 0]],
  ])('expect map(%p, identity) to spread to %p', (arr, expected) => {
    const itr = toGenerator(arr);
    const fn = (x: number) => x;
    const resultItr = map(itr, fn);
    expect([...resultItr]).toStrictEqual(expected);
  });

  test.each<[number[], number[]]>([
    [[], []],
    [[0], [0]],
    [[0, 0], [0, 1]],
    [[0, 0, 0], [0, 1, 2]],
  ])('expect map(%p, index) to spread to %p', (arr, expected) => {
    const itr = toGenerator(arr);
    const fn = (_: number, x: number) => x;
    const resultItr = map(itr, fn);
    expect([...resultItr]).toStrictEqual(expected);
  });

  test.each<[number[], number[]]>([
    [[], []],
    [[0], [1]],
    [[0, 1], [1, 2]],
    [[0, 1, 2], [1, 2, 3]],
  ])('expect map(%p, plusOne) to spread to %p', (arr, expected) => {
    const itr = toGenerator(arr);
    const fn = (x: number) => x + 1;
    const resultItr = map(itr, fn);
    expect([...resultItr]).toStrictEqual(expected);
  });

  test.each<[any[]]>([
    [[]],
    [[0]],
    [[0, 1]],
    [[0, 1, 2]],
  ])('expect map(%p, fn) to invoke length times', (arr) => {
    const expected = arr.length;
    const itr = toGenerator(arr);
    const fn = jest.fn();
    const resultItr = map(itr, fn);

    void [...resultItr];
    expect(fn).toBeCalledTimes(expected);
  });
});
