enum Operation {
  Add,
  Sub,
  Mul,
  Div,
  Mod,
}

function calc(a: number, b: number, op: Operation): number {
  switch (op) {
    case Operation.Add:
      return a + b;
    case Operation.Sub:
      return a - b;
    case Operation.Mul:
      return a * b;
    case Operation.Div:
      return a / b;
    case Operation.Mod:
      return a % b;
    default:
      return -1;
  }
}

const res = calc(7, 2, Operation.Mod);
console.log(res);
