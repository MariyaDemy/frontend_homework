// assignment 2
// Создать функцию, которая создает модальное окно с вопросом о имени и возрасте
// пользователя. Поля обязательные для заполнения. В окне 2 кнопки - отмена и
// добавить. При нажатии отмены, окно закрывается, при нажатии на добавить,
// проверяется, если возраст больше 18, то на странице появляется новый элемент
// списка с именем и возрастом пользователя, если нет выводится красное текстовое
// сообщение.
// Функция вызывается на нажатие кнопки - Добавить пользователя

const addToTable = (name, age) => {
    const tdName = document.createElement('td');
    tdName.innerText = name;
    const tdAge = document.createElement('td');
    tdAge.innerText = age;
    const trUser = document.createElement('tr');
    trUser.appendChild(tdName);
    trUser.appendChild(tdAge);
    return document.getElementsByTagName("tbody")[0].appendChild(trUser);
}
    
const addNewItemClick = (e) => {
    document.getElementsByClassName('modal')[0].classList.toggle("display-none");
};
    
const addClick = (e) => {
    e.preventDefault();
    const form = document.forms[0];
    if (Number(form.elements[1].value) < 18){
        alert("you shall not pass");
    }
    else {
        addToTable(form.elements[0].value, form.elements[1].value);
    }
    document.forms[0].reset();
    document.getElementsByClassName('modal')[0].classList.toggle("display-none");
};

const cancelClick = (e) => {
    e.preventDefault();
    document.forms[0].reset();
    document.getElementsByClassName('modal')[0].classList.toggle("display-none");
};
        
document.getElementById("addNewItem").addEventListener('click', addNewItemClick);
document.getElementById("addBtn")[0].addEventListener('click', addClick);
document.getElementById("cancelBtn")[0].addEventListener('click', cancelClick);

// assignment 3
// Создать собственную валидацию поля емейл:
// При потере фокуса или отправке формы, проверять с помощью регулярного
// выражения значение поля email и показывать ошибку, если оно не соответствует


