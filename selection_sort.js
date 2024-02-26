// This sorting algorithm loops through the array until it finds the lowest value, then it switches it with the leftmost unchecked value. It has Big Oh N^2 / 2 complexity which, ignoring constants, is just Big Oh N^2. Credit to 'A Common Sense Guide to Data Structures and Algorithms'.

function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++) {
        let lowestNumberIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }
        if(lowestNumberIndex != i) {
            let temp = array[i];
            array[i] = array[lowestNumberIndex];
            array[lowestNumberIndex] = temp;
        }
    }
    return array;
}

let array = [3, 7, 4, 9, 10, 23, 14, 8, 17];
console.log(selectionSort(array));