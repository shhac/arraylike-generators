import 'jest';

import { forEach } from './for-each';
import { toGenerator } from './to-generator';

describe('sync forEach', () => {
  test.each<[number[]]>([
    [[]],
    [[0]],
    [[0, 0]],
    [[0, 0, 0]],
  ])('expect forEach(%p, identity) return void', (arr) => {
    const itr = toGenerator(arr);
    const fn = (x: number) => x;
    const result = forEach(itr, fn);
    expect(result).toBe(undefined);
  });

  test.each<[any[]]>([
    [[]],
    [[0]],
    [[0, 1]],
    [[0, 1, 2]],
  ])('expect forEach(%p, fn) to invoke length times', (arr) => {
    const expected = arr.length;
    const itr = toGenerator(arr);
    const fn = jest.fn();
    void forEach(itr, fn);
    expect(fn).toBeCalledTimes(expected);
  });

  test.each<[any[]]>([
    [[]],
    [[0]],
    [[0, 1]],
    [[0, 1, 2]],
  ])('expect forEach(%p, fn) to invoke with each item', (arr) => {
    const expected = arr.length;
    const itr = toGenerator(arr);
    const fn = jest.fn();
    void forEach(itr, fn);
    arr.forEach((item, i) => {
      expect(fn).toBeCalledWith(item, i, itr);
    });
  });
});
