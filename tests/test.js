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
    expect(binary).toBe('01110111 01101111 01110010 01100100 (not in mapping)');
  });

  it('should handle the entire lowercase alphabet', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const binary = wordToBinary(alphabet);
    expect(binary).toBe(
      '01100001 01100010 01100011 01100100 01100101 01100110 01100111 ' +
      '01101000 01101001 01101010 01101011 01101100 01101101 01101110 ' +
      '01101111 01110000 01110001 01110010 01110011 01110011 01110100 ' +
      '01110101 01110110 01110111 01111000 01111001 01111010'
    );
  });

  // will ad more tests later
});

  
  