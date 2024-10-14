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
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      return str[i].toUpperCase();
    } else {
      return str[i].toLowerCase();
    }
  }
  return reversed;
};
console.log(reverseZigZagString("hello"));
