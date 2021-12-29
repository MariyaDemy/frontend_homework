// assignment 1
let text = document.createElement("p");
text.innerText = "Это всего лишь текст";
text.style.color = "blue";
document.body.after(text);
let error = document.createElement("div")
error.classList.add("alert");
error.innerText = "А это сообщение об ошибке";
error.style.backgroundColor = 'red';
error.style.color = '#fff';
error.style.padding = '20px';
text.after(error);

// assignment 2 Создать список элементов с помощью тега <ol> со значениями из массива
// строк. Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, 
// а нечетный - “odd” и иметь синий фон. Если это пользователь, у которого в имени 
// встречаются минимум 2 одинаковые буквы без учета регистра (например, Peter, Tatiana) - 
// цвет текста должен стать белым.

let charRepeats = function (str) {
    for (let c = 0; c <= str.length; c++) {
        for (let j = c + 1; j <= str.length; j++) {
            if (str[j] === str[c]) {
                return true;
            }
        }
    }
    return false;
}

let names = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
    "Sergey", "Ivan", "Alan"];
let namesList = document.createElement("ol");
error.after(namesList);
for (let i = 0; i < names.length; i++) {
    let name = document.createElement("li");
    name.textContent = names[i];
    namesList.append(name);
    if (i % 2 === 0) {
        name.classList.add("even");
    }
    else if (i % 2 === 1) {
        name.classList.add("odd");
    }
    if (charRepeats(names[i]) === true) {
        name.style.color = "#fff";
    }
}

// assignment 3 
// Напишите функцию showMessage, которая будет вставлять на страницу div с классом “message” на
// странице с указанными аргументами: текст сообщения, цвет фона сообщения, положение от
// верхнего края страницы (css свойство top) и положение от левого края страницы (css свойство left)
// Количество сообщений на странице не может быть больше 3-х. Если на странице 3 сообщения и
// мы вызываем showMessage(), то 1 сообщение необходимо удалить, а 2,3 и 4 должны остаться.
// Необходимо проверить, есть ли у нас уже на странице сообщение в таких же координатах (такие
// же и top, и left). Если есть - занять позицию +25px left и right. Если и в этот раз у нас имеется
// сообщение в данной позиции - повторять процедуру, пока не найдем свободное место.
let messages = [];
let showMessage = function (text, background, top, left) {
    let message = document.createElement("div");
    message.classList.add("message");
    message.innerText = text;
    message.style.backgroundColor = background;
    message.style.top = top + "px";
    message.style.left = left + "px";
    document.body.appendChild(message);
    messages.push(message);
    console.log(messages);

    if (messages.length > 3) {
        let last = messages.shift();
        last.remove()
    }

}

showMessage("Всем ку1", "yellow", 500, 500);
showMessage("Всем привет2", "yellow", 100, 100);
showMessage("Всем привет3", "blue", 100, 100);
showMessage("Всем привет4", "yellow", 300, 300);


// assignment 4
// Динамическое создание списка
// Запрашивайте число у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Каждый следующий элемент <li> списка должен должен иметь значение суммы всех предыдущих элементов +
// введенного значения
// Процесс прерывается, когда пользователь нажимает Esc, вводит пустую строку или не числовое значение


const createList = function () {
   
    let list = document.createElement("ul");
    document.body.appendChild(list);
    let arr = [];
    
    for (i = 0; true; i++) {
        
        arr[i] = prompt("Enter any number");

        if (arr[i] === '' || arr[i] === null || isNaN(arr[i])) {
            break;
        }
        else {
            let result = arr.reduce((sum,item) => +sum + +item);
            let li = document.createElement("li");
            li.textContent = result;
            list.append(li);
        }
    }
}

createList();