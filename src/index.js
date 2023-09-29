// character to Binary Mapping
const charToBinary = {
    'a': '01100001', 'b': '01100010', 'c': '01100011', 'd': '01100100',
    'e': '01100101', 'f': '01100110', 'g': '01100111', 'h': '01101000',
    'i': '01101001', 'j': '01101010', 'k': '01101011', 'l': '01101100',
    'm': '01101101', 'n': '01101110', 'o': '01101111', 'p': '01110000',
    'q': '01110001', 'r': '01110010', 's': '01110011', 't': '01110100',
    'u': '01110101', 'v': '01110110', 'w': '01110111', 'x': '01111000',
    'y': '01111001', 'z': '01111010',
  };
  
  // helper function to convert a character to binary or '(not in mapping)' if not found
  function charToBinaryOrNot(char) {
    if (char === ' ') {
      return ' '; // save spaces
    }
    const lowerChar = char.toLowerCase(); // convert to lowercase for mapping 
    if (charToBinary[lowerChar]) {
      return charToBinary[lowerChar];
    } else {
      return char.charCodeAt(0).toString(2).padStart(8, '0') + ` (${char} not in mapping)`;
    }
  }
  
  // function to convert a word to binary
  function wordToBinary(word) {
    const binaryArray = word.split('').map(charToBinaryOrNot);
    return binaryArray.join(' ');
  }
  
  module.exports = {
    wordToBinary,
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  