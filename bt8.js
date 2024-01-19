function findThreeNumbers(arr, target) {
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
          const thirdNumber = target - (arr[i] + arr[j]);
          if (arr.includes(thirdNumber, j + 1)) {
              result.push(arr[i], arr[j], thirdNumber);
              return result;
          }
      }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
const targetSum = 12;

const result = findThreeNumbers(numbers, targetSum);
console.log("Kết quả: ", result);