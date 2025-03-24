function calculator(num1, num2, operator) {
  let result;
  // ==== IF STATEMENT =====
  //   if (operator === "+") {
  //     result = num1 + num2;
  //   } else if (operator === "-") {
  //     result = num1 - num2;
  //   } else if (operator === "*") {
  //     result = num1 * num2;
  //   } else if (operator === "/") {
  //     result = num1 / num2;
  //   } else {
  //     throw new Error('Invalid operator');
  //   }

  // ===== SWITCH STATEMENT =====
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }

  return result;
}

module.exports = calculator;
