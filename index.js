export const reorder_rectangle_points = points => {
  const output = [];
  let lowestX = Number.POSITIVE_INFINITY;
  let lowestY = Number.POSITIVE_INFINITY;
  let highestX = Number.NEGATIVE_INFINITY;
  let highestY = Number.NEGATIVE_INFINITY;
  points.map(p => {
    if (p.x < lowestX) lowestX = p.x;
    if (p.y < lowestY) lowestY = p.y;
    if (p.x > highestX) highestX = p.x;
    if (p.y > highestY) highestY = p.y;
  });

  for (let i = 0; i < points.length; i++) {
    if (points[i].x == lowestX && points[i].y == lowestY) {
      output.push(points[i]);
      break;
    }
  }
  for (let i = 0; i < points.length; i++) {
    if (points[i].x == highestX && points[i].y == lowestY) {
      output.push(points[i]);
      break;
    }
  }

  for (let i = 0; i < points.length; i++) {
    if (points[i].x == highestX && points[i].y == highestY) {
      output.push(points[i]);
      break;
    }
  }
  for (let i = 0; i < points.length; i++) {
    if (points[i].x == lowestX && points[i].y == highestY) {
      output.push(points[i]);
      break;
    }
  }
  return output;
}