function printOddIntegers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      sum += i;
    }
  }

  if (sum % 2 === 0) {
    sum += 1;
  }

  console.log("Tổng các số nguyên dương lẻ là một số lẻ:", sum);
}
let userInput = prompt("Nhập vào một số nguyên dương n: ");
let n = parseInt(userInput);

console.log("Các số nguyên dương lẻ là:");
printOddIntegers(n);