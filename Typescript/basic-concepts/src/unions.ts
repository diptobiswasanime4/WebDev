interface Circle {
  radius: number;
}

interface Square {
  side: number;
}

interface Rect {
  length: number;
  breadth: number;
}

type Shape = Circle | Square | Rect; // or
type ShapeUnion = Circle & Square & Rect;

function shapeFn(shape: Shape) {
  console.log("This is the shape function.");
}
function shapeUnionFn(shapeUnion: ShapeUnion) {
  console.log("This is the shape union function.");
}

shapeFn({ length: 2, breadth: 1 });
shapeUnionFn({ radius: 1, side: 2, length: 4, breadth: 3 });
