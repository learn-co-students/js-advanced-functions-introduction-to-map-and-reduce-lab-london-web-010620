// Your code here
const mapToNegativize = (array) => {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(array[i] * -1);
	}
	return newArr;
};
const mapToNoChange = (array) => {
	return array;
};
const mapToDouble = (array) => {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(array[i] * 2);
	}
	return newArr;
};
const mapToSquare = (array) => {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(array[i] ** 2);
	}
	return newArr;
};
const reduceToTotal = (arr, start = 0) => {
	let total = start;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
};

const reduceToAllTrue = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) return false;
    }
    return true;
  };

const reduceToAnyTrue = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) return true;
	}
	return false;
};
