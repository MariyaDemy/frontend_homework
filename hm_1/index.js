// через третью переменную
let first = 88;
let second = "string";
console.log(first, second);
// let third;
// third = first;
// first = second;
// second = third;
// console.log(first, second);

// либо
[first, second] = [second, first];
console.log(first, second);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr[0] + arr[5] + arr[6];
console.log(sum);


function a() {
    let first = 88;
    let second = "string";
    console.log(first, second);
    let third;
    third = first;
    first = second;
    second = third;
    console.log(first, second);

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = arr[0] + arr[5] + arr[6];
    console.log(sum);

    let obj = {
        first: first,
        second: second,
        sum: sum
    };
    console.log(obj);
}

a();







