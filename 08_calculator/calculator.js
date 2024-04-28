const add = function(value1, value2) {
	return (value1+value2);
};

const subtract = function(value1, value2) {
	return (value1-value2);
};

const sum = function(valuesArray) {
  let max_sum = 0;
	if (valuesArray.length === 0) {
    return 0
  } else if (valuesArray.length === 1) {
    return valuesArray[0];
  } else if (valuesArray.length > 1) {
    for (let i = 0; i < valuesArray.length; i++) {
      max_sum += valuesArray[i];
    }
  }
  return max_sum
};

const multiply = function(valuesArray) {
 let answer = 1;
 for (let i=0; i <valuesArray.length; i++) {
  answer *= valuesArray[i];
 }
 return answer;
};

const power = function(value1, value2) {
  return (value1**value2)
	
};

const factorial = function(value) {
  let total = 1;
  while (value > 1) {
    total = total*value
    value--
  }
  return total
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
