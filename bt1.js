let arr = [8, 5, 3, 8, 5];
function printSymmetricArrays(arr) {
    let isFlag = false;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          isFlag = true;
          break;
        }
      }
    }
  
    if (isFlag) {
      console.log("Mảng đối xứng");
    }else{
        console.log("Không phải mảng đối xứng");
    }
  }
  printSymmetricArrays(arr);