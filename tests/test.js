const { wordToBinary } = require('../src/index');

test('Converts a word to binary', () => {
    const binary = wordToBinary('hello');
    expect(binary).toBe('01101000 01100101 01101100 01101100 01101111');
  });
  
  test('Handles mixed-case input', () => {
    const binary = wordToBinary('HeLlO');
    expect(binary).toBe('01101000 01100101 01101100 01101100 01101111');
  });
  
  test('Handles characters not in the mapping', () => {
    const binary = wordToBinary('word$'); // $ is not in the mapping
    expect(binary).toBe('01110111 01101111 01110010 01100100 ($ not in mapping)');
  });
    
  test('Handles an empty word', () => {
    const binary = wordToBinary('');
    expect(binary).toBe('');
  });


  
  