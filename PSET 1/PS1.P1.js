const reverseString = (inputString) => {
    const cleanString = inputString.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reversedString = cleanString.split('').reverse().join('');
    return reversedString;
  };
  
  const inputString = 'supercalifragilisticexpialidocious';
  const reversed = reverseString(inputString);
  console.log(reversed); 
  