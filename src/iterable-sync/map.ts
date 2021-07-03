export function* map<T extends any, U extends any>(
  itr: Generator<T>,
  callbackFn: (value: T, index: number, itr: Generator<T>) => U,
): Generator<U> {
  let i = 0;
  for (const value of itr) {
    yield callbackFn(value, i++, itr);
  }
  return i;
}

export default map
