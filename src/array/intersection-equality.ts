import { intersection } from './intersection';

/** Pick items from arr1 which are also in arr2, using an function to test for equality */
export const intersectionEquality = <T extends any, U extends any>(
  arr1: T[],
  arr2: U[],
  isEqual?: (a: T, b: U) => boolean,
): T[] => {
  if (!isEqual) return intersection(arr1, arr2);

  const remaining = arr2.slice();
  const result: T[] = [];

  for (let i = 0; i < arr1.length && remaining.length > 0; ++i) {
    const needle: T = arr1[i];

    for (let j = 0; j < remaining.length; ++j) {
      const candidate = remaining[j];
      /*
      The following line is the only logically different line to intersection.ts
      so we know that tests will pass in standard cases
      */
      if (!isEqual(needle, candidate)) continue;

      result.push(needle);
      remaining.splice(j, 1);
    }
  }

  return result;
};

export default intersectionEquality;
