let array = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];

for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      // Troca os elementos
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array); // Saída: [1, 2, 5, 7, 9, 32, 45, 49, 97, 99]