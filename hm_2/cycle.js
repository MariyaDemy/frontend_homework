// assignment 1
let i = 0;
while (i <= 50) {
    console.log(i);
    i++;
}

// assignment 2
for (let a = 0; a <= 100; a++) {
    if (a % 2 === 0) {
        console.log(a);
    }
}

// assignment 3
const addNumbers = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    sum = 0;
    for (b = 0; b < arr.length; b++) {
        sum = sum + arr[b];
    }
    alert(sum);
}
addNumbers();

// assignment 4
let num = 2;
let degree = 0;
let result = 1;
while (degree < 8) {
    result = result * num;
    degree++;
};
console.log(result);

// assignment 5 Найти самую большую цифру в целом числе

// вроде работает и c положительными, и с отрицательными целыми числами..
function maxDigit(integer) {
    let newArr = Array.from(String(integer), Number);
    console.log(newArr);
    // сдвигает самую большую цифру в начало
    for (var c = 0; c < newArr.length; c++) {
        if (newArr[0] === NaN) {
            newArr[0] === newArr[1];
        }
        if (newArr[c] > newArr[1]) {
            newArr[1] = newArr[c];
        }
    }
    console.log(newArr[1]);
}
maxDigit(-5421873);




