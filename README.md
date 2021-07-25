# Arraylike-Generators

Use array-like methods on generators

## Sync

### concat

### flatMap

### forEach

### map

### toGenerator

Convert an array to a generator

## Async

TODO

## Array

### intersection / intersectionEquality

Get the intersection of two arrays

* Supports duplicates
* Will stop early if all possible matches found
* Provides custom equality options
* Result will retain the order of the LHS array

```ts
import { array } from 'arraylike-generators';

array.intersection([1, 1, 2, 2, 3, 3], [3, 2, 2, 1]); // => [1, 2, 2, 3]
array.intersectionEquality(['1', '2', '3'], [1, 3], (a, b) => (+a) === b); // => ['1', '3']
```
