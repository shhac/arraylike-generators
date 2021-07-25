import 'jest';

import { toGenerator } from './to-generator';

describe('iterator-sync toGenerator', () => {
  it('should give an object with a next', () => {
    const result = toGenerator([]);
    expect(result?.next).toBeInstanceOf(Function);
  });
  it('should give an iterable', () => {
    const result = toGenerator([]);
    const fn = () => {
      for (const value of result) {
        void value;
      }
    };
    expect(fn).not.toThrow();
  });
  test.each<number[][]>([
    [[]],
    [[1]],
    [[1, 2]],
    [[1, 2, 3]],
  ])('expect toGenerator(%p) to spread to input', (expected) => {
    const itr = toGenerator([...expected]);
    const result = [...itr];
    expect(result).toStrictEqual(expected);
  });
});
