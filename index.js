// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(i => i * -1);
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(i => i);
}

function mapToDouble(sourceArray) {
    return sourceArray.map(i => i * 2);
}

function mapToSquare(sourceArray) {
    return sourceArray.map(i => i*i)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}