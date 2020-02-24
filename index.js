const mapToNegativize = array => {
  return array.map(element => element * -1);
};

const mapToNoChange = array => {
  return array.map(element => element);
};

const mapToDouble = array => {
  return array.map(element => element * 2);
};

const mapToSquare = array => {
  return array.map(element => element ** 2);
};

const reduceToTotal = (array, start = 0) => {
  return array.reduce((acc, currentV) => acc + currentV, start);
};

function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return true;
  }
  return false;
}
