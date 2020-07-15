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

export const toTitle = str => !str ? '' : str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

export const isDefined = i => typeof i != 'undefined' && i != null;

export const isValidURL = str => {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

export const splitArray = (arr, n) => {
  const chunkLength = Math.floor(arr.length / n);
  const chunks = [];
  let tempArr = [];
  arr.forEach((element, index) => {
    tempArr.push(element);
    if ((arr.length == 1 || index != 0) && (index % chunkLength == 0 || index == arr.length - 1)) {
      chunks.push(tempArr);
      tempArr = [];
    }
  });
  return chunks;
}