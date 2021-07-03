export function* concat<T extends any>(
  ...itrs: Generator<T>[]
): Generator<T> {
  let i = 0;
  for (const itr of itrs) {
    for (const value of itr) {
      ++i;
      yield value;
    }
  }
  return i;
}

export default concat;
