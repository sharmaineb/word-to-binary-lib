import { wordToBinary } from '../src/index';

/**
 * Test case: Converts a word to binary
 */
test('Converts a word to binary', () => {
    const binary = wordToBinary('hello');
    expect(binary).toBe('01101000 01100101 01101100 01101100 01101111');
});

/**
 * Test case: Handles mixed-case input
 */
test('Handles mixed-case input', () => {
    const binary = wordToBinary('HeLlO');
    expect(binary).toBe('01101000 01100101 01101100 01101100 01101111');
});

/**
 * Test case: Handles characters not in the mapping
 */
test('Handles characters not in the mapping', () => {
    const binary = wordToBinary('word$'); // $ is not in the mapping
    const sanitizedReceived = binary.replace(/\s/g, '');
    const sanitizedExpected = '0111011101101111011100100110010000100100($notinmapping)'.replace(/\s/g, '');

    expect(sanitizedReceived).toBe(sanitizedExpected);
});

/**
 * Test case: Handles an empty word
 */
test('Handles an empty word', () => {
    const binary = wordToBinary('');
    expect(binary).toBe('');
});

/**
 * Test case: Handles a word with spaces
 */
test('Handles a word with spaces', () => {
    const binary = wordToBinary('word space');
    expect(binary).toBe('01110111 01101111 01110010 01100100   01110011 01110000 01100001 01100011 01100101');
});

/**
 * Test case: Handles a word with numbers
 */
test('Handles a word with numbers', () => {
    const binary = wordToBinary('12345');
    expect(binary).toBe('00110001 (1 not in mapping) 00110010 (2 not in mapping) 00110011 (3 not in mapping) 00110100 (4 not in mapping) 00110101 (5 not in mapping)');
});

/**
 * Test case: Handles special characters
 */
test('Handles special characters', () => {
    const binary = wordToBinary('!@#');
    expect(binary).toBe('00100001 (! not in mapping) 01000000 (@ not in mapping) 00100011 (# not in mapping)');
});

/**
 * Test case: Handles characters not in the lowercase alphabet
 */
test('Handles characters not in the lowercase alphabet', () => {
    const binary = wordToBinary('123?');
    expect(binary).toBe('00110001 (1 not in mapping) 00110010 (2 not in mapping) 00110011 (3 not in mapping) 00111111 (? not in mapping)');
});




  
  
  







  


  
  