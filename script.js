const numbersToWords = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",

  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",

  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",

  100: "one-hundred",
  200: "two-hundred",
  300: "three-hundred",
  400: "four-hundred",
  500: "five-hundred",
  600: "six-hundred",
  700: "seven-hundred",
  800: "eight-hundred",
  900: "nine-hundred",

  1000: "one-thousand",
  10000: "ten-thousand",
  100000: "hundred-hundred",
  1000000: "one-million",

};
const outputDiv = document.getElementById("output");
outputDiv.innerHTML += `<p><h1> Numbers to Words</h1></p>`;

function convertNumbersToWords(num) {  
    let numString = " ";
    let remaining = num

    if (remaining <= 20) {
        numString += numbersToWords[remaining];
    } else if (remaining < 100) {
        numString += numbersToWords[Math.floor(remaining / 10) * 10] + " " + numbersToWords[remaining % 10];
    } else if (remaining < 1000) {
        numString += numbersToWords[Math.floor(remaining / 100)] + " hundred " + convertNumbersToWords(remaining % 100);        
    } else if ( remaining < 1000000){
            numString +=
            convertNumbersToWords(Math.floor(remaining / 1000)) + " thousand " + convertNumbersToWords(remaining % 1000)
        }else{
            numString += convertNumbersToWords(Math.floor(remaining/1000000))+ " million "+ convertNumbersToWords(remaining %1000000);
        }
        return numString.trim();
       

    }
    
    
    
    
const allWords = [];
for (let i = 0; i <= 1000000; i++) {
    allWords.push(convertNumbersToWords(i))
}
outputDiv.innerHTML += `<p>${allWords.join(", ")}</p>`;
console.log(outputDiv.innerHTML);
  // console.log(hundredNames)
