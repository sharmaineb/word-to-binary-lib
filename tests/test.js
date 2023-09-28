const { wordToBinary } = require('../src/index');

describe('wordToBinary', () => {
  it('should convert a word to binary', () => {
    const binary = wordToBinary('hello');
    expect(binary).toBe('01101000 01100101 01101100 01101100 01101111');
  });

  it('should handle mixed-case input', () => {
    const binary = wordToBinary('HeLlO');
    expect(binary).toBe('01101000 01100101 01101100 01101100 01101111');
  });

  it('should handle characters not in the mapping', () => {
    const binary = wordToBinary('word$'); // $ is not in the mapping
    expect(binary).toBe('01110111 01101111 01110010 01100100 $ (not in mapping)');
  });

  it('should handle the entire lowercase alphabet', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const binary = wordToBinary(alphabet);
    const expectedBinary = alphabet
      .split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  
    expect(binary).toBe(expectedBinary);
  });
  
  
  
});


  
  