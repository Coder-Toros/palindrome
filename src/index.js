'use strict';

function isPalindrome(str) {
  const reversedStr = str
    .replaceAll(' ', '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

  return reversedStr === str.replaceAll(' ', '').toLowerCase();
}

console.log(isPalindrome('Аргентина МаНит негРа'));
console.log(isPalindrome('Аргентина не Манит негра'));