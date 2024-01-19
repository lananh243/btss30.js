let userInput = prompt("Nhập vào một chuỗi bất kỳ:");

function capitalize(str) {
  let words = str.split(" ");

  let capitalizedWords = words.map(word => {
    let lastChar = word.slice(-1);
    return word.slice(0, -1) + lastChar.toUpperCase();
  });

  let result = capitalizedWords.join(" ");
  console.log(result);
}

capitalize(userInput);