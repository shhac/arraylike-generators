# intersection

Get the intersection of two arrays

* Supports duplicates
* Will stop early if all possible matches found
* Provides custom equality options
* Result will retain the order of the LHS array

```ts
import { intersection, intersectionEquality } from 'intersection';

intersection([1, 1, 2, 2, 3, 3], [3, 2, 2, 1]); // => [1, 2, 2, 3]
intersectionEquality(['1', '2', '3'], [1, 3], (a, b) => (+a) === b); // => ['1', '3']
```
