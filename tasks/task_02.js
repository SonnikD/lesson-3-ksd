/*
 *  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
 * */

function isPalindrome(str) {
  if (typeof str !== "string") {
    return false;
  }
  return str === str.split("").reverse().join("");
}

module.exports = isPalindrome;
