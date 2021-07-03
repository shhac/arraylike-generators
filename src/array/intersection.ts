/** Pick items from arr1 which are also in arr2 */
export const intersection = <T extends any, U extends any>(
  arr1: T[],
  arr2: U[],
): (T & U)[] => {
  const remaining = arr2.slice();
  const result: (T & U)[] = [];

  for (let i = 0; i < arr1.length && remaining.length > 0; ++i) {
    const needle: T = arr1[i];

    for (let j = 0; j < remaining.length; ++j) {
      const candidate = remaining[j];
      if (needle !== candidate) continue;

      result.push(needle as (T & U));
      remaining.splice(j, 1);
    }
  }

  return result;
};

export default intersection;
