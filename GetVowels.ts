function getVowels(str: string) {
  return str.match(/[aeiou]/gi) || [];
}

function getVowelsManual(str: string) {
  let vowelCount = 0;
  let stringArr = str.toLowerCase().split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (
      stringArr[i] === "a" ||
      stringArr[i] === "e" ||
      stringArr[i] === "i" ||
      stringArr[i] === "o" ||
      stringArr[i] === "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
}

function getVowelsManual2(str: string) {
  let vowelCount = 0;
  let stringArr = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < stringArr.length; i++) {
    if (vowels.includes(stringArr[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

function getVowelsLength(str: string) {
  return getVowels(str).length || 0;
}

console.log(getVowelsManual2("javascript"));
