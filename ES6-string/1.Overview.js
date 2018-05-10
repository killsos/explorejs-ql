/**
  New string methods:
  1. startsWith
  2. endsWith
  3. includes
  4. repeat()
 */

> 'hello'.startsWith('hell')
true
> 'hello'.endsWith('ello')
true
> 'hello'.includes('ell')
true
> 'doo '.repeat(3)
'doo doo doo '

//ES6 has a new kind of string literal, the template literal:

// String interpolation via template literals (in backticks)
const first = 'Jane';
const last = 'Doe';
console.log(`Hello ${first} ${last}!`);
// Hello Jane Doe!

// Template literals also let you create strings with multiple lines
const multiLine = `
This is
a string
with multiple
lines`;