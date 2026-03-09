// Reverse a string
function reverseString(str: string) {
  const arr = str.split("");
  const reversed = arr.reverse();
  const result = reversed.join("");
  return result;
}

