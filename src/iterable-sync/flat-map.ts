export function* flatMap<T extends any, U extends any>(
  itr: Generator<T>,
  callbackFn: (value: T, index: number, itr: Generator<T>) => U[] | Generator<U>,
): Generator<U> {
  let i = 0;
  for (const value of itr) {
    const result = callbackFn(value, i++, itr);
    for (const outValue of result) {
      yield outValue;
    }
  }
  return i;
};

export default flatMap;
