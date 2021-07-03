export function* toGenerator<T extends any>(arr: T[]): Generator<T> {
  for (let i = 0; i < arr.length; ++i) {
    yield arr[i];
  }
  return arr[arr.length];
}

export default toGenerator;
