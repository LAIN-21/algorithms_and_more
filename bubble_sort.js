function bubbleSort(arr) {
    let n = arr.length - 1;
    let sorted = false;

    while (sorted === false) {
        sorted = true
        for (i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }       
        }
        n--
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log(arr);

