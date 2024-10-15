//write your code here
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log(reverseString("hello"));

const reverseZigZagString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i > -1; i--) {
    if (i % 2 === 0) {
      reversed += str[i].toUpperCase();
    } else {
      reversed += str[i].toLowerCase();
    }
  }
  return reversed;
};
console.log(reverseZigZagString("hello"));
console.log(reverseZigZagString("Fellows"));
console.log(reverseZigZagString("Code Challenge"));
