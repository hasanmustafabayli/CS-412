const evaluate = (expression) => {
    
    const [left, operator, right] = expression.match(/(\d+)([+*/^-])(\d+)/).slice(1);
    switch (operator) {
      case '+':
        return (left, right) => left + right;
      case '*':
        return (left, right) => left * right;
      case '-':
        return (left, right) => left - right;
      case '^':
        return (left, right) => Math.pow(left, right);
      case '/':
        return (left, right) => left / right;
      default:
        return null;
    }
  };
  
  const expression = '8^3';
  const operator = evaluate(expression);
  console.log(`${expression} = ${operator(8, 3)}`);
  