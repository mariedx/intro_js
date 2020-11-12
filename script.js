const multiply = (inputNumber1, inputNumber2) => {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}

console.log(multiply(2, 3));

const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
console.log(otherMultiply(2, 3));