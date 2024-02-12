'use strict';

function isPalindrome(str) {
  const reversedStr = str
    .replaceAll(' ', '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

  if (reversedStr === str.replaceAll(' ', '').toLowerCase()) {
    return true;
  }

  return false;
}

console.log(isPalindrome('Аргентина МаНит негРа'));
console.log(isPalindrome('Аргентина не Манит негра'));
