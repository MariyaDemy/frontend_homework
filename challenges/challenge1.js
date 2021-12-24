
let exampleArr = [1, 5, 7, 88, 4, 3, 8, 12, 17, 21, 5.5];

const quickSort = function (arr) {

    if (arr.length < 2) return arr

    let firstElem = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (firstElem > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(firstElem, quickSort(right));
}

console.log(quickSort(exampleArr));