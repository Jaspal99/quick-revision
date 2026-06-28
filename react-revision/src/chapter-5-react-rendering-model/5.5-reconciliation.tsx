// reconciliation is the process of comparing the new virtual dom with the previous virtual dom and determining what changes need to be made to the actual DOM. React uses a diffing algorithm to efficiently update the DOM by only applying the necessary changes.

// important rules of reconciliation:
// 1. Elements of the same type will be updated, while elements of different types will be replaced.
// 2. Keys are used to identify elements in a list and help React determine which elements have changed, been added, or been removed.
// 3. When an element is updated, React will only update the properties that have changed, rather than re-rendering the entire element.