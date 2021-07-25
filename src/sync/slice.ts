export function* slice<T extends any>(
  itr: Generator<T>,
  start: number = 0,
  end: number = Infinity,
): Generator<T> {
  if (start < 0 || end < 0) {
    // need to know length which requires complete iteration
    // convert to array, slice, convert back to generator
    const arr = [...itr];
    const result = arr.slice(start, end);
    for (const value of result) {
      yield value;
    }
    return result.length;
  }
  let len = 0;
  let index = 0;
  for (const value of itr) {
    if (index >= end) break;
    if (index >= start) {
      ++len;
      yield value;
    }
    ++index;
  }
  return len;
}

export default slice
