export const forEach = <T extends any>(
  itr: Generator<T>,
  callbackFn: (value: T, index: number, itr: Generator<T>) => void,
): void => {
  let i = 0;
  for (const value of itr) {
    callbackFn(value, i++, itr);
  }
}

export default forEach;
