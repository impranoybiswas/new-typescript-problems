import { arithmeticSum } from "./calculateArithmeticSum.ts";
import { calculateFactorial } from "./calculateFactorial.ts";
import { geometricSum } from "./calculateGeometricSum.ts";
import { total, total2 } from "./calculateTotal.ts";
import { checkArmstrong } from "./checkArmstrong.ts";
import { checkMobileNumber } from "./checkMobileNumber.ts";
import { convert12hrTo24hr, convert24hrTo12hr } from "./convertTime.ts";
import { findLargest } from "./findLargest.ts";
import { findMissingNumber } from "./findMissingNumber.ts";
import { findPrimeNumbers, primeCheck } from "./findPrimeNumber.ts";
import {
  getVowels,
  getVowels2,
  getVowelsCount,
  getVowelsCount2,
  getVowelsLength,
} from "./findVowels.ts";
import { genarateFibonacci } from "./genarateFibonacci.ts";
import { generatePassword } from "./genaratePassword.ts";
import {
  hollowRectangle,
  pyramid,
  Rectangle,
  rightTriangle,
} from "./genarateShapes.ts";
import {
  removeDuplicate
} from "./RemoveDuplicate.ts";
import { reverseSentance, reverseWord } from "./ReverseString.ts";
import { verifyPassword } from "./verifyPassword.ts";

const word: string = "JavaScript";
const words: string[] = ["Javascript", "PHP", "Java", "Python"];
const sentance: string = "I am learning JavaScript";
const sentances: string[] = [
  "I am learning JavaScript",
  "I am learning PHP",
  "I am learning Java",
  "I am learning Python",
];
const number: number = 10;
const serial: number[] = [1, 2, 3, 4, 5];
const serial1: number[] = [4, 8, 16, 32];
const serial2: number[] = [2, 4, 8, 10];
const serial3: number[] = [5, 10, 15, 25];

// console.log("Arithmetic Sum : ", arithmeticSum(serial));
// console.log("Geometric Sum : ", geometricSum(serial1));
// console.log("Factorial : ", calculateFactorial(5));

// console.log("12hr to 24hr : ", convert24hrTo12hr("12:00 AM"));
// console.log("24hr to 12hr : ", convert12hrTo24hr("12:00 PM"));

// console.log("Fibonacci Series : ", genarateFibonacci(10));

// console.log("2nd Largest Number : ", findLargest(serial2, 2));

// console.log("Total by reduce : ", total(serial3));
// console.log("Total by loop : ", total2(serial3));

// console.log("Vowels : ", getVowels(word));
// console.log("Vowels : ", getVowels2(word));
// console.log("Vowels Length : ", getVowelsLength(word));
// console.log("Vowels Count : ", getVowelsCount(word));
// console.log("Vowels Count : ", getVowelsCount2(word));

// console.log("Find Missing Number : ", findMissingNumber(serial3));
// console.log("Remove Duplicate Number : ", removeDuplicate(serial3));
// console.log("Remove Duplicate String : ", removeDuplicate(words));

// console.log("Reverse Word : ", reverseWord(word));
// console.log("Reverse Sentance : ", reverseSentance(sentance));

// console.log("Triangle Pattern :\n", trianglePattern(5, "*"));

// console.log("Is Prime Number : ", primeCheck(7));
// console.log("Find Primes : ", findPrimeNumbers(serial3));

// console.log(rightTriangle({ n: 5, s: "*" }));
// console.log(pyramid({ n: 5, s: "*" }));
// console.log(Rectangle({ n: 5, s: "*" }, 2));
// console.log(hollowRectangle({ n: 10, s: "*" }, 5));

// console.log(checkArmstrong(153));

// console.log(checkMobileNumber("+8801826141054"));

// console.log(verifyPassword("dwwer@1A"));
console.log(generatePassword(8) +" : " + verifyPassword(generatePassword(8)));

// console.log(generatePassword(8));