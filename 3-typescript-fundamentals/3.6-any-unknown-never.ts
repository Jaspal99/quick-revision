function handleError(error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}

type Shape =
  | { type: "circle"; radius: number }
  | { type: "square"; side: number };

function area(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.side * shape.side;
    default: {
      const exhaustive: never = shape;
      return exhaustive;
    }
  }
}

const c: Shape = { type: "circle", radius: 4 };
area(c);
