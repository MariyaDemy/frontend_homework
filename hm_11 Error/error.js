// assignment 1
// Создать блок обработки ошибок - при вызове несуществующей функции показывать
// пользователю ошибку на экране “что-то пощло не так”

try {
    notExistFunc()
} catch (error) {
    let message = document.createElement("div");
    document.body.appendChild(message);
    message.innerText = "oops, something went wrong!!"
}


// assignment 2
// Создайте метод find_index(arr, value), который принимает список(массив значений) и значение.
// Если значение не найдено в списке нужно сгенерировать ошибку. 

let list = [1,2,3,4,5,6,7,8,9,10];

const findIndex = function(arr, value) {
    if (arr.includes(value, 0) === false) {
        throw new Error("Not found");
}}

findIndex(list, 6);
findIndex(list, 15);