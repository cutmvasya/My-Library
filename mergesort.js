// function merge (num1, num2) {
//     return num1.concat(num2);
// }
// let nums = merge([1,3,5], [2,4,6]).sort();
// console.log(nums);

// function merge(value1, value2) {
//     let result = [];
  
//     while (value1.length > 0 && value2.length > 0) {
//       if (value1[0] < value2[0]) {
//         result.push(value1.shift());
//       } else {
//         result.push(value2.shift());
//       }
//     }
  
//     result = result.concat(value1);
//     result = result.concat(value2);
//     return result;
//   }
  
//   let A = [1, -3, 5];
//   let B = [2, 7, -9];
  
//   console.log(merge(A, B).sort());

// function countDown(number) {
//   console.log(number)  
//   const numbers = number - 1;

//   if (numbers > 0){
//     countDown(numbers);
//   } else {
//     console.log("Selesai!")
//   }
// }

// countDown(3);

function countPositivesSumNegatives(input) {
    //let result = [];
    let positif = [];
    console.log(positif)
    let negatif = [];
    console.log(negatif)
    let totalNegatif = 0;
    console.log(totalNegatif)
    let totalPositif = 0;
    console.log(totalPositif)
    for (let i = 0; i < input.length; i++){
      if (input[i] < 0) return negatif.push(input[i].shift())
      if (input[i] > 0) return positif.push(input[i].shift())
    }
    for (let x = 0; x < negatif.length; x++){
      return totalNegatif += negatif[x];
    }
    for (let y = 0; y < positif.length; y++){
      return totalPositif += positif[y]
    }
  }
  
  
    