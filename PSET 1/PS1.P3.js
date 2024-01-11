const applyDecorator = (inputString, decoratorFunction) => {
    return decoratorFunction(inputString);
  };
  
  const splitOnC = (inputString) => inputString.split('c').filter(Boolean);
  const result1 = applyDecorator(
    'supercalifragilisticexpialidocious',
    splitOnC
  );
  console.log(result1);
  const replaceAWithCapitalA = (inputString) => {
    const modifiedString = inputString.replace(/a/g, 'A');
    return {
      originalString: inputString,
      modifiedString,
      numberReplaced: (inputString.match(/a/g) || []).length,
      length: modifiedString.length,
    };
  };
  const result2 = applyDecorator(
    'supercalifragilisticexpialidocious',
    replaceAWithCapitalA
  );
  console.table(result2);
  