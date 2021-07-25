import 'jest';

import { slice } from './slice';
import { toGenerator } from '../array/to-generator';

describe('sync slice', () => {
  [[], [0], [0, 1], [0, 1, 2]].forEach((arr) => {
    test(`expect slice([${arr}]) to equal [${arr}]`, () => {
      const itr = toGenerator(arr);
      const result = slice(itr);
      expect([...result]).toStrictEqual(arr);
    });

    [0, 1, 2, -1, -2, -3].forEach((start) => {
      const expected = arr.slice(start);
      test(`expect slice([${arr}], ${start}) to equal [${expected}]`, () => {
        const itr = toGenerator(arr);
        const result = slice(itr, start);
        expect([...result]).toStrictEqual(expected);
      });

      [0, 1, 2, -1, -2, -3].forEach((end) => {
        const expected = arr.slice(start, end);
        test(`expect slice([${arr}], ${start}, ${end}) to equal [${expected}]`, () => {
          const itr = toGenerator(arr);
          const result = slice(itr, start, end);
          expect([...result]).toStrictEqual(expected);
        });
      });
    });
  });
});
