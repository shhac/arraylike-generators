import 'jest';

import { flatMap } from './flat-map';
import { toGenerator } from './to-generator';

describe('iterator-sync flatMap', () => {
  test.each<[number[], number[]]>([
    [[], []],
    [[0], [0]],
    [[0, 0], [0, 0]],
    [[0, 0, 0], [0, 0, 0]],
  ])('expect flatMap(%p, identity) to spread to %p', (arr, expected) => {
    const itr = toGenerator(arr);
    const fn = (x: number) => [x];
    const resultItr = flatMap(itr, fn);
    expect([...resultItr]).toStrictEqual(expected);
  });

  test.each<[number[], number[]]>([
    [[], []],
    [[0], [0]],
    [[0, 0], [0, 1]],
    [[0, 0, 0], [0, 1, 2]],
  ])('expect flatMap(%p, index) to spread to %p', (arr, expected) => {
    const itr = toGenerator(arr);
    const fn = (_: number, x: number) => [x];
    const resultItr = flatMap(itr, fn);
    expect([...resultItr]).toStrictEqual(expected);
  });

  test.each<[number[], number[]]>([
    [[], []],
    [[0], [1]],
    [[0, 1], [1, 2]],
    [[0, 1, 2], [1, 2, 3]],
  ])('expect flatMap(%p, plusOne) to spread to %p', (arr, expected) => {
    const itr = toGenerator(arr);
    const fn = (x: number) => [x + 1];
    const resultItr = flatMap(itr, fn);
    expect([...resultItr]).toStrictEqual(expected);
  });

  test.each<[number[], number[]]>([
    [[], []],
    [[0], [0]],
    [[0, 1], [0]],
    [[0, 1, 2], [0, 2]],
  ])('expect flatMap(%p, noOdds) to spread to %p', (arr, expected) => {
    const itr = toGenerator(arr);
    const fn = (x: number) => (x % 2 === 0) ? [x] : [];
    const resultItr = flatMap(itr, fn);
    expect([...resultItr]).toStrictEqual(expected);
  });

  test.each<[number[], number[]]>([
    [[], []],
    [[0], [0, 0]],
    [[0, 1], [0, 0, 1, 1]],
    [[0, 1, 2], [0, 0, 1, 1, 2, 2]],
  ])('expect flatMap(%p, duplicate) to spread to %p', (arr, expected) => {
    const itr = toGenerator(arr);
    const fn = (x: number) => [x, x];
    const resultItr = flatMap(itr, fn);
    expect([...resultItr]).toStrictEqual(expected);
  });

  test.each<[any[]]>([
    [[]],
    [[0]],
    [[0, 1]],
    [[0, 1, 2]],
  ])('expect flatMap(%p, fn) to invoke length times', (arr) => {
    const expected = arr.length;
    const itr = toGenerator(arr);
    const fn = jest.fn(() => []);
    const resultItr = flatMap(itr, fn);

    void [...resultItr];
    expect(fn).toBeCalledTimes(expected);
  });
});
