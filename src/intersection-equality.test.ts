import 'jest';
import { intersectionEquality } from './intersection-equality';

describe('intersectionEquality', () => {
  const alwaysFalse = () => false;
  const alwaysTrue = () => true;
  const evens = (a: number, b: number) => ((a % 2) === 0) && ((b % 2) === 0);

  test.each([
    [[], [], [], alwaysFalse],
    [[0], [], [], alwaysFalse],
    [[], [0], [], alwaysFalse],
    [[0], [0], [], alwaysFalse],
    [[0], [1], [], alwaysFalse],
    [[1], [0], [], alwaysFalse],
    [[1], [1], [], alwaysFalse],
  ])('expect intersectionEquality(%p, %p, alwaysFalse) to be %p', (a, b, expected, fn) => {
    const result = intersectionEquality(a, b, fn);
    expect(result).toStrictEqual(expected);
  });

  test.each([
    [[], [], [], alwaysTrue],
    [[0], [], [], alwaysTrue],
    [[], [0], [], alwaysTrue],
    [[0], [0], [0], alwaysTrue],
    [[0], [1], [0], alwaysTrue],
    [[1], [0], [1], alwaysTrue],
    [[1], [1], [1], alwaysTrue],
  ])('expect intersectionEquality(%p, %p, alwaysTrue) to be %p', (a, b, expected, fn) => {
    const result = intersectionEquality(a, b, fn);
    expect(result).toStrictEqual(expected);
  });

  test.each([
    [[], [], [], evens],
    [[0], [], [], evens],
    [[], [0], [], evens],
    [[0], [0], [0], evens],
    [[0], [1], [], evens],
    [[1], [0], [], evens],
    [[1], [1], [], evens],
    [[0], [2], [0], evens],
    [[2], [0], [2], evens],
  ])('expect intersectionEquality(%p, %p, evens) to be %p', (a, b, expected, fn) => {
    const result = intersectionEquality(a, b, fn);
    expect(result).toStrictEqual(expected);
  });
});
