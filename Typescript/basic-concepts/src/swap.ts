function swap<T1, T2>(a: T1, b: T2): [T2, T1] {
  return [b, a];
}

const res1 = swap(2, 3);
const res2 = swap("two", 3);
console.log(res1);
console.log(res2);
