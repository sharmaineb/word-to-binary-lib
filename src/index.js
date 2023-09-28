// define a mapping of characters to binary representations
const charToBinary = {
    'a': '01100001',
    'b': '01100010',
    'c': '01100011',
    'd': '01100100',
    'e': '01100101',
    'f': '01100110',
    'g': '01100111',
    'h': '01101000',
    'i': '01101001',
    'j': '01101010',
    'k': '01101011',
    'l': '01101100',
    'm': '01101101',
    'n': '01101110',
    'o': '01101111',
    'p': '01110000',
    'q': '01110001',
    'r': '01110010',
    's': '01110011',
    't': '01110100',
    'u': '01110101',
    'v': '01110110',
    'w': '01110111',
    'x': '01111000',
    'y': '01111001',
    'z': '01111010',
  };
  
  // function to convert a word to binary
  function wordToBinary(word) {
    let binaryString = '';
    for (let i = 0; i < word.length; i++) {
      const char = word[i].toLowerCase(); // convert to lowercase for case insensitivity
      if (char in charToBinary) {
        binaryString += charToBinary[char] + ' '; // add a space between binary representations of characters
      } else {
        // handle characters that are not in the mapping (e.g., spaces)
        binaryString += char + ' (not in mapping) ';
      }
    }
    return binaryString.trim(); // remove trailing space
  }
  
  // export the function so it can be used as a library
  module.exports = {
    wordToBinary,
};
  