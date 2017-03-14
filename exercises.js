//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here #1
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here #2
  var total = num - 5;
  return total;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here #3
  var stringLength1 = str1.length;
  var stringLength2 = str2.length;
  if (stringLength1 === stringLength2) {
    return true;
  }
  return false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here #4
  if (x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here #5
  if (num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here #6
  if (num > 50) {
    return true;
  }
  return false;
}

function add(x, y) {
  //add x and y together and return the value
  //code here #7
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here #8
  var sum = x - y; 
  return sum;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here #9
  var sum = x / y; 
  return sum;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here #10
  var sum = x * y; 
  return sum; 
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here #11
  var remainder = x % y; 
  return remainder;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here #12
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here #13
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

function square(num) {
  //square num and return the new value
  //code here #14
  var sum = Math.pow (num, 2);
  return sum;
}

function cube(num) {
  //cube num and return the new value
  //code here #15
  var sum = Math.pow (num, 3);
  return sum;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here #16
  var sum = Math.pow (num, exponent);
  return sum;
}

function roundNumber(num) {
  //round num and return it
  //code here #17
  var sum = Math.round(num);
  return sum;
}

function roundUp(num) {
  //round num up and return it
  //code here #18
  var sum = Math.ceil(num);
  return sum;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here #19
  var strongFinish = (str + '!');
  return strongFinish;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here #20
  var fullName = (firstName + ' ' + lastName);
  return fullName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here #21
  var greeting = ('Hello' + ' ' + name + '!');
  return greeting;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here #22
  var area = (length * width); 
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here #23
  var area = (base * height) / 2;
  return area;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here #24
  var area = Math.pow(radius, 2) * Math.PI; 
  var roundArea = Math.round(area);
  return roundArea;
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here #25
  var area = (length * width * height);
  return area;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
