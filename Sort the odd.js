/* You will be given an array of numbers. You have to sort the odd numbers
in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/


function sortArray(array) {
  let arrOdd = [];
  let arrZero = [];
  if (array == []) {        // если массив пуст выводит пустой массив
    return []
  } else {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1 || array[i] % 2 == -1) {
            arrOdd.push(array[i]);       // добавляет в массив отрицательные числа
        } 
      }
    }
    
  arrOdd.sort(function(a,b){    // сортує масив від меншого до більшого
    return a - b
  });
  console.log(arrOdd);
  let newArr = array;
  let y = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1 || array[i] % 2 == -1) {
      newArr[i] = arrOdd[y];
      y++;
    }
  }
  return newArr
}


console.log(sortArray([-20, 15, -50, -25, -31, 19, -38, 27, 29, 34,-49, 29, 10, 48, 45, -30, -7, -33, -18, -17]));
// [-20, -49, -50, -33, -31, -25, -38, -17, -7, 34, 15, 19, 10, 48, 27, -30, 29, 29, -18, 45]

/* Код в одну строку Codewars

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}*/
