let prompt = require('prompt-sync')();
// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
// let n = 10;
// for(let i = 1; i <= n;i++){
//    console.log(i);
// }



// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
// let i = 0;
// while (i<20) {
//    console.log(20)
//    n--;
// }



// 3. Write a js program to print all alphabets from a to z. - using while loop
// let i = 97;
// while(i <= 122){
//    console.log(String.fromCharCode(i));
//    i++;
// }




// 4. Write a js program to print all even numbers between 1 to 100. - using while loop
// let i = 0;
// while(i <= 100){
// if(i % 2 == 0){
//       console.log(i);
// }
// i++;
// }



// 5. Write a js program to print all odd number between 1 to 100.
// for(let i = 0;i<100;i++){
//    if(i % 2 != 0){
//       console.log(i);
//    }
// }



// 6. Write a js program to find sum of all natural numbers between 1 to n.
// let n = 10;
// let sum = 0;
// for(let i = 0;i <= n;i++){
//    sum += i;
// }
// console.log(sum);


// 7. Write a js program to find sum of all even numbers between 1 to n.     
// let n = 10;
// let sum = 0;
// for(let i = 0;i <= n;i++){
//    if(i % 2 == 0){
//       sum += i;
//    } 
// }
// console.log(sum);



//8. Write a js program to find sum of all odd numbers between 1 to n.
// let n = 10;
// let sum = 0;
// for(let i = 0;i <= n;i++){
//    if(i % 2 != 0){
//       sum += i;
//    } 
// }
// console.log(sum);



// 9. Write a js program to print multiplication table of any number.
// let num = prompt("Enter a number for its table of multiplication : ");
// let multiple = 0;
// for(let i = 0;i <= 10;i++){
//    multiple =num * i;
//    console.log(`${num} * ${i} = ${multiple}`)
// }


// 10. Write a js program to count number of digits in a number.
// let number = parseInt(prompt("Enter a number to count its digit : ")); 
// let count = 0;
// while (number !== 0) {
//     number = Math.floor(number / 10);
//     count++; 
// }
// console.log("Number of digits:", count);



// 11. Write a js program to find first and last digit of a number.
// let number = prompt("Enter a number : ");
// let firstDigit = parseInt(number[0]); 
// let lastDigit = parseInt(number[number.length - 1]); 
// console.log("First Digit:", firstDigit);
// console.log("Last Digit:", lastDigit);


// 12. Write a js program to find sum of first and last digit of a number.
// let number = prompt("Enter a number : ");
// let firstDigit = parseInt(number[0]); 
// let lastDigit = parseInt(number[number.length - 1]);
// let sum = firstDigit + lastDigit;
// console.log(`The sum of first and last digit of a number is ${sum}`);



// 13. Write a js program to swap first and last digits of a number.
// let number = prompt("Enter a number who contains more than 1 digit : ");
// if (number.length > 1) {
//     let firstDigit = number[0];
//     let lastDigit = number[number.length - 1];
//     let swappednumber = lastDigit + number.slice(1, -1) + firstDigit;
//     let swappedNumber = parseInt(swappednumber);
//     console.log("Original Number:", number);
//     console.log("Swapped Number:", swappedNumber);
// } else {
//     console.log("The number has only one digit. Swapping is not applicable.");
// }




// 14. Write a js program to calculate sum of digits of a number.
// let number = prompt("Enter a number : ");
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     sum += parseInt(number[i]);
// }
// console.log("Sum of Digits:", sum);



//15. Write a js program to calculate product of digits of a number.
// let number = prompt("Enter a number : ");
// let product = 1;
// for (let i = 0; i < number.length; i++) {
//     product *= parseInt(number[i]);
// }
// console.log("Product of Digits:", product);



//  16. Write a js program to enter a number and print its reverse.
// let number = prompt("Enter a number : ");
// let reverse = "";
// for (let i = number.length - 1; i >= 0; i--) {
//     reverse += number[i];
// }  
// console.log("Original Number:", number);
// console.log("Reversed Number:", reverse);


// 17. Write a js program to check whether a number is palindrome or not.
// let number = prompt("Enter a number : ");
// let originalNumber = number;
// let reverse = "";
// for (let i = number.length - 1; i >= 0; i--) {
//     reverse += number[i];
// }
// if (originalNumber === reverse) {
//     console.log(`${originalNumber} is a palindrome.`);
// } else {
//     console.log(`${originalNumber} is not a palindrome.`);
// }


// 18. Write a js program to find frequency of each digit in a given integer.


// 19. Write a js program to enter a number and print it in words.
// let number = prompt("Enter a number : ");
// let words = "";
// for (let i = 0; i < number.length; i++) {
//     switch (number[i]) {
//         case "0":
//             words += "Zero ";
//             break;
//         case "1":
//             words += "One ";
//             break;
//         case "2":
//             words += "Two ";
//             break;
//         case "3":
//             words += "Three ";
//             break;
//         case "4":
//             words += "Four ";
//             break;
//         case "5":
//             words += "Five ";
//             break;
//         case "6":
//             words += "Six ";
//             break;
//         case "7":
//             words += "Seven ";
//             break;
//         case "8":
//             words += "Eight ";
//             break;
//         case "9":
//             words += "Nine ";
//             break;
//     }
// }
// console.log(words);


// 20. Write a js program to print all ASCII character with their values.


// 21. Write a js program to find power of a number using for loop.
// let base = prompt("Enter base number : ");
// let exponent = prompt("Enter exponent number : ");
// let result = 1;
// for (let i = 1; i <= exponent; i++) {
//     result *= base;
// }
// console.log(`${base}^${exponent} = ${result}`);


// 22. Write a js program to find all factors of a number.

 
// function findFactors(num) {
//     let factors = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }
//     return factors;
// }


// let number = 28;
// console.log(`Factors of ${number} are: ${findFactors(number).join(", ")}`);

 


// 23. Write a js program to calculate factorial of a number.

// function factorial(num) {
//     if (num === 0 || num === 1) return 1;
//     return num * factorial(num - 1);
// }

// let number = 5;
// console.log(`Factorial of ${number} is: ${factorial(number)}`);

// 24. Write a js program to find HCF (GCD) of two numbers.

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// let num1 = 56;
// let num2 = 98;
// console.log(`HCF (GCD) of ${num1} and ${num2} is: ${gcd(num1, num2)}`);

// 25. Write a js program to find LCM of two numbers.

// let num1 = 12;
// let num2 = 18;
// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

// console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);




// 26. Write a js program to check whether a number is Prime number or not.
// let num = 29;
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(`${num} is ${isPrime(num) ? 'a prime number' : 'not a prime number'}`);


// 27. Write a js program to print all Prime numbers between 1 to n

// let n = 50;
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//                 return false;
//             }
//         }
//     return true;
  
// function printPrimes(n) {
//     for (let i = 1; i <= n; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }
// printPrimes(n);

// 28. Write a js program to find sum of all prime numbers between 1 to n.
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function sumOfPrimes(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (isPrime(i)) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// let n = 50;
// console.log(`Sum of all prime numbers between 1 and ${n} is ${sumOfPrimes(n)}`);

// 29. Write a js program to find all prime factors of a number.

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function primeFactors(n) {
//     let factors = [];
    
//     while (n % 2 === 0) {
//         factors.push(2);
//         n = n / 2;
//     }


//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         while (n % i === 0) {
//             factors.push(i);
//             n = n / i;
//         }
//     }
//     if (n > 2) {
//         factors.push(n);
//     }

//     return factors;
// }
// let number = 56;
// console.log(`Prime factors of ${number} are: ${primeFactors(number).join(', ')}`);

// 30. Write a js program to check whether a number is Armstrong number or not.


// function isArmstrong(number) {
//     let numberOfDigits = number.toString().length;
//     let sum = 0;
//     let temp = number;
//     while (temp > 0) {
//         let remainder = temp % 10;
//         sum += remainder ** numberOfDigits;
//         temp = parseInt(temp / 10);
//     }
//     return sum === number;
// }
 
// let num = 153;

// console.log(`${num} is ${isArmstrong(num) ? 'an Armstrong number' : 'not an Armstrong number'}`);

// 31. Write a js program to print all Armstrong numbers between 1 to n.

// function isArmstrong(number) {
//     let numberOfDigits = number.toString().length;
//     let sum = 0;
//     let temp = number;
//     while (temp > 0) {
//         let remainder = temp % 10;
//         sum += remainder ** numberOfDigits;
//         temp = parseInt(temp / 10);
//     }
//     return sum === number;
// }

// function printArmstrongs(n) {
//     for (let i = 1; i <= n; i++) {
//         if (isArmstrong(i)) {
//             console.log(i);
//         }
//     }
// }

// let n = 1000;
// console.log(`Armstrong numbers between 1 and ${n} are:`);
// printArmstrongs(n);

// 32. Write a js program to check whether a number is Perfect number or not.

// function isPerfect(number) {
//     let sum = 0;
//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === number;
// }

// let num = 28;
// console.log(`${num} is ${isPerfect(num) ? 'a Perfect number' : 'not a Perfect number'}`);


// 33. Write a js program to print all Perfect numbers between 1 to n.

// function isPerfect(number) {
//     let sum = 0;
//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === number;
// }

// function printPerfects(n) {
//     for (let i = 1; i <= n; i++) {
//         if (isPerfect(i)) {
//             console.log(i);
//         }
//     }
// }

// let n = 1000;
// console.log(`Perfect numbers between 1 and ${n} are:`);
// printPerfects(n);


// 34. Write a js program to check whether a number is Strong number or not.

// function factorial(num) {

//     if (num === 0 || num === 1) return 1;
//     return num * factorial(num - 1);
// }

// function isStrong(number) {
//     let temp = number;
//     let sum = 0;
//     while (temp > 0) {
//         let digit = temp % 10;

//         sum += factorial(digit);
//         temp = Math.floor(temp / 10);
//     }
//     return sum === number;

// }

// let num = 145;
// console.log(`${num} is ${isStrong(num) ? 'a Strong number' : 'not a Strong number'}`);



// // 35. Write a js program to print all Strong numbers between 1 to n.




// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     let fact = 1;
//     for (let i = 2; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }


// function isStrongNumber(num) {
//     let sum = 0;
//     let temp = num;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += factorial(digit);
//         temp = Math.floor(temp / 10);
//     }
//     return sum === num;
// }


// function printStrongNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         if (isStrongNumber(i)) {
//             console.log(i);
//         }
//     }
// }


// let n = 500;
// printStrongNumbers(n);


// // 36. Write a js program to print Fibonacci series up to n terms.

// function fibonacciSeries(n) {
//     let fibSeries = [];
//     let a = 0, b = 1, nextTerm;

//     for (let i = 1; i <= n; i++) {
//         fibSeries.push(a);
//         nextTerm = a + b;
//         a = b;
//         b = nextTerm;
//     }

//     return fibSeries;
// }


// let n = 10;
// console.log(`Fibonacci series up to ${n} terms: ${fibonacciSeries(n).join(', ')}`);

// // 37. Write a js program to find one's complement of a binary number.
// function onesComplement(binary) {
//     let complement = '';

    
//     for (let i = 0; i < binary.length; i++) {
//         complement += binary[i] === '0' ? '1' : '0';
//     }

//     return complement;
// }


// let binaryNumber = '101010';
// console.log(`One's complement of ${binaryNumber} is ${onesComplement(binaryNumber)}`);

// // 38. Write a js program to find two's complement of a binary number.

// function onesComplement(binary) {
//     let complement = '';


//     for (let i = 0; i < binary.length; i++) {

//         complement += binary[i] === '0' ? '1' : '0';
//     }

//     return complement;
// }

// function twosComplement(binary) {

//     let onesComp = onesComplement(binary);

    
//     let binaryArray = onesComp.split('').map(Number);

    
//     for (let i = binaryArray.length - 1; i >= 0; i--) {
//         if (binaryArray[i] === 0) {
//             binaryArray[i] = 1;
//             break;
//         } else {
//             binaryArray[i] = 0;
//         }
//     }


//     if (binaryArray[0] === 0) {
//         binaryArray.unshift(1);
//     }

//     return binaryArray.join('');
// }


// let binaryNumber = '101010';
// console.log(`Two's complement of ${binaryNumber} is ${twosComplement(binaryNumber)}`);


// // 39. Write a js program to convert Binary to Octal number system.

// function binaryToOctal(binary) {

//     let binaryStr = binary.toString();

    
//     while (binaryStr.length % 3 !== 0) {
//         binaryStr = '0' + binaryStr;
//     }

//     let octal = '';

    
//     for (let i = 0; i < binaryStr.length; i += 3) {
//         let binaryGroup = binaryStr.substring(i, i + 3);
//         let decimalValue = parseInt(binaryGroup, 2); 
//         octal += decimalValue.toString(8); 
//     }

//     return octal;
// }


// let binaryNumber = '1101011';
// console.log(`Octal equivalent of binary ${binaryNumber} is ${binaryToOctal(binaryNumber)}`);


// 40. Write a js program to convert Binary to Decimal number system.

// function binaryToDecimal(binary) {
//     let decimal = 0;
//     let binaryStr = binary.toString();
    
    
//     for (let i = 0; i < binaryStr.length; i++) {
        
//         decimal = decimal * 2 + parseInt(binaryStr[i], 10);
//     }
    
//     return decimal;
// }


// let binaryNumber = '1101011';
// console.log(`Decimal equivalent of binary ${binaryNumber} is ${binaryToDecimal(binaryNumber)}`);

// 41. Write a js program to convert Binary to Hexadecimal number system.

// function binaryToHexadecimal(binary) {

//     let binaryStr = binary.toString();

    
//     while (binaryStr.length % 4 !== 0) {
//         binaryStr = '0' + binaryStr;
//     }

//     let hexadecimal = '';


//     for (let i = 0; i < binaryStr.length; i += 4) {
//         let binaryGroup = binaryStr.substring(i, i + 4);
//         let decimalValue = parseInt(binaryGroup, 2); 
//         hexadecimal += decimalValue.toString(16).toUpperCase(); 
//     }

//     return hexadecimal;
// }


// let binaryNumber = '1101011';
// console.log(`Hexadecimal equivalent of binary ${binaryNumber} is ${binaryToHexadecimal(binaryNumber)}`);


// 42. Write a js program to convert Octal to Binary number system.


// function octalToBinary(octal) {
//     let binary = '';

    
//     let octalStr = octal.toString();

    
//     for (let i = 0; i < octalStr.length; i++) {
//         let decimalValue = parseInt(octalStr[i], 8); 
//         let binaryGroup = decimalValue.toString(2); 

        
//         while (binaryGroup.length < 3) {
//             binaryGroup = '0' + binaryGroup;
//         }

//         binary += binaryGroup;
//     }

//     return binary;
// }


// let octalNumber = '725';
// console.log(`Binary equivalent of octal ${octalNumber} is ${octalToBinary(octalNumber)}`);


// 43. Write a js program to convert Octal to Decimal number system.

// function octalToDecimal(octal) {
//     let decimal = 0;
//     let octalStr = octal.toString();
//     let length = octalStr.length;

    
//     for (let i = 0; i < length; i++) {
//         let digit = parseInt(octalStr[i], 10);
//         decimal += digit * Math.pow(8, length - 1 - i);
//     }

//     return decimal;
// }


// let octalNumber = '725';
// console.log(`Decimal equivalent of octal ${octalNumber} is ${octalToDecimal(octalNumber)}`);


// // 44. Write a js program to convert Octal to Hexadecimal number system.

// function octalToDecimal(octal) {
//     let decimal = 0;
//     let octalStr = octal.toString();
//     let length = octalStr.length;

    
//     for (let i = 0; i < length; i++) {
//         let digit = parseInt(octalStr[i], 10);
//         decimal += digit * Math.pow(8, length - 1 - i);
//     }

//     return decimal;
// }

// function decimalToHexadecimal(decimal) {
//     return decimal.toString(16).toUpperCase();
// }

// function octalToHexadecimal(octal) {
//     let decimal = octalToDecimal(octal);
//     return decimalToHexadecimal(decimal);
// }

// let octalNumber = '725';
// console.log(`Hexadecimal equivalent of octal ${octalNumber} is ${octalToHexadecimal(octalNumber)}`);


//  // 45. Write a js program to convert Decimal to Binary number system.

// function decimalToBinary(decimal) {
//     let binary = '';

    
//     if (decimal === 0) {
//         return '0';
//     }

    
//     while (decimal > 0) {
//         binary = (decimal % 2) + binary;
//         decimal = Math.floor(decimal / 2);
//     }

//     return binary;
// }


// let decimalNumber = 45;
// console.log(`Binary equivalent of decimal ${decimalNumber} is ${decimalToBinary(decimalNumber)}`);


//  // 46. Write a js program to convert Decimal to Octal number system.

// function decimalToOctal(decimal) {
//     let octal = '';

//     if (decimal === 0) {
//         return '0';
//     }

    
//     while (decimal > 0) {
//         octal = (decimal % 8) + octal;
//         decimal = Math.floor(decimal / 8);
//     }

//     return octal;
// }


// let decimalNumber = 45;
// console.log(`Octal equivalent of decimal ${decimalNumber} is ${decimalToOctal(decimalNumber)}`);


//  // 47. Write a js program to convert Decimal to Hexadecimal number system.

// function decimalToHexadecimal(decimal) {
//     let hexadecimal = '';


//     if (decimal === 0) {
//         return '0';
//     }


//     while (decimal > 0) {
//         let remainder = decimal % 16;
//         hexadecimal = remainder.toString(16).toUpperCase() + hexadecimal;
//         decimal = Math.floor(decimal / 16);
//     }

//     return hexadecimal;
// }

// let decimalNumber = 255;
// console.log(`Hexadecimal equivalent of decimal ${decimalNumber} is ${decimalToHexadecimal(decimalNumber)}`);



//  // 48. Write a js program to convert Hexadecimal to Binary number system.

// function hexadecimalToBinary(hexadecimal) {
//     let binary = '';
//     let hexStr = hexadecimal.toString();

    
//     for (let i = 0; i < hexStr.length; i++) {
//         let decimalValue = parseInt(hexStr[i], 16); 
//         let binaryGroup = decimalValue.toString(2);  

        
//         while (binaryGroup.length < 4) {
//             binaryGroup = '0' + binaryGroup;
//         }

//         binary += binaryGroup;
//     }

//     return binary;
// }


// let hexNumber = '1A3F';
// console.log(`Binary equivalent of hexadecimal ${hexNumber} is ${hexadecimalToBinary(hexNumber)}`);


// // 49. Write a js program to convert Hexadecimal to Octal number system.

// function hexadecimalToDecimal(hexadecimal) {
//     return parseInt(hexadecimal, 16);
// }

// function decimalToOctal(decimal) {
//     let octal = '';

    
//     if (decimal === 0) {
//         return '0';
//     }

    
//     while (decimal > 0) {
//         octal = (decimal % 8) + octal;
//         decimal = Math.floor(decimal / 8);
//     }

//     return octal;
// }

// function hexadecimalToOctal(hexadecimal) {
//     let decimal = hexadecimalToDecimal(hexadecimal);
//     return decimalToOctal(decimal);
// }


// let hexNumber = '1A3F';
// console.log(`Octal equivalent of hexadecimal ${hexNumber} is ${hexadecimalToOctal(hexNumber)}`);


// // 50. Write a js program to convert Hexadecimal to Decimal number system.

// function hexadecimalToDecimal(hexadecimal) {
//     return parseInt(hexadecimal, 16);
// }


// let hexNumber = '1A3F';
// console.log(`Decimal equivalent of hexadecimal ${hexNumber} is ${hexadecimalToDecimal(hexNumber)}`);


// // 51. Write a js program to print Pascal triangle upto n rows.


// function generatePascalTriangle(n) {
//     let triangle = [];

//     for (let i = 0; i < n; i++) {
//         triangle[i] = [];
//         triangle[i][0] = 1; 

//         for (let j = 1; j < i; j++) {
//             triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }

//         triangle[i][i] = 1; 
//     }

//     return triangle;
// }

// function printPascalTriangle(n) {
//     let triangle = generatePascalTriangle(n);

//     for (let i = 0; i < triangle.length; i++) {
//         console.log(triangle[i].join(' '));
//     }
// }


// let numRows = 5;
// printPascalTriangle(numRows);








