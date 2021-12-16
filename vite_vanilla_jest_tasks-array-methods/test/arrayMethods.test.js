// several tasks checked with TDD Jest

const reverseString = (str) => str.split('').reduce((a, b) => (b + a));
  
  
  
// Return true if palindrome and false if not
const palindromeChecker = (str) => str == str.split('').reduce((a, b) => (b + a)) ? true : false;

  
  

// Return an integer in reverse
function reverseInt(int) {}
  
  

// Return a string with the first letter of every word capitalized
function capitalizeLetters(str) {}



// Return the character that is most common in a string
function maxCharacter(str) {}




describe('My higher order arrow functions', () => {

    it('reverses a String', () => {
        expect(reverseString('hello')).toBe('olleh');
    })

    test('returns true if pallindrome', () => {
        expect(palindromeChecker('racecar')).toBe(true);
    })

    test('reverses integer', () => {
        expect(reverseInt(5321)).toBe(1235)
    })

    it('Return a string with the first letter of every word capitalized', () => {
        expect(capitalizeLetters('i love javascript')).toBe('I Love Javascript')
    })

    it('Returns the character that is most common in a string', () => {
        expect(maxCharacter('javascript')).toBe('a')
    })

})