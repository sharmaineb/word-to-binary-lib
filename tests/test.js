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
    const sanitizedReceived = binary.replace(/\s/g, '');
    const sanitizedExpected = '0111011101101111011100100110010000100100($notinmapping)'.replace(/\s/g, '');
  
    expect(sanitizedReceived).toBe(sanitizedExpected);
  });
        
  test('Handles an empty word', () => {
    const binary = wordToBinary('');
    expect(binary).toBe('');
  });


  
  