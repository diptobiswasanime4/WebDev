function calc(
  a: number,
  b: number,
  operation: "sum" | "sub" | "mul" | "div" | "mod"
): number {
  switch (operation) {
    case "sum":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      return a / b;
    case "mod":
      return a % b;
    default:
      return -1;
  }
}

const res = calc(7, 2, "div");
console.log(res);
