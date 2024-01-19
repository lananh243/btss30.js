
function buildCharacterArray(str) {
    let letters = [];
  
    for (let char of str) {
      if (/[a-zA-Z]/.test(char)) {
        letters.push(char);
      } else if (/[0-9]/.test(char)) {
        letters.push(char);
      } else {
        letters.push(char);
      }
    }
    console.log(letters);
}
const userInput = prompt("Nhập vào một chuỗi:");
buildCharacterArray(userInput);