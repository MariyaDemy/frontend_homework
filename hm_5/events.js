const buttonClick = (e) => {
    console.log(e.target.innerText);
    e.target.removeEventListener('click', buttonClick);
}
document.querySelector(".btn").addEventListener('click', buttonClick);

const getMenu = (e) => {
    document.querySelector(".menu").classList.toggle("display-none");
    document.querySelector(".backgrounder").classList.toggle("display-none");
}
document.querySelector(".open").addEventListener('click', getMenu);
document.querySelector(".close").addEventListener('click', getMenu);


// Попробуйте назначить обработчик события на скролл
window.addEventListener("scroll", () => console.log("smth is happening here"));

// assignment 1
// попробуем при помощи обработчика событий сделать выпадающее меню при
// наведении на любой из элементов навигации (пункты меню)

const showSubMenu = (e) => {
    document.querySelector(".submenu").classList.toggle("display-none");  
}
document.querySelector(".menuitem").addEventListener('mouseenter', showSubMenu)
document.querySelector(".submenu").addEventListener('mouseleave', showSubMenu)

// assignment 2
// Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить
// на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько
// угодно раз. При нажатии кнопки удалить - удаляется последний добавленный
// элемент
const addText = () => {
    let elem = document.createElement("div");
    elem.innerText = "z-z-z-z-z-z-z-z";
    document.querySelector(".wrapper").appendChild(elem);
}
document.querySelector(".add").addEventListener('click', addText);

const deleteText = () => {
    document.querySelector(".wrapper").lastChild.remove();
}
document.querySelector(".delete").addEventListener('click', deleteText);

// assignment 3
// Реализовать функцию drawFigure, которая принимает в качестве аргументов:
// название геометрической фигуры, цвет заливки, положение от верхнего края
// страницы (css свойство top) и положение от левого края страницы (css свойство
// left), а также радиус, если это круг, сторону, если квадрат и ширину и высоту, если
// прямоугольник. Вызывать функцию при нажатии на соответствующие клавиши,
// например круг - Q, квадрат - W и тд

const addFigure = function(name, color, top, left, r, a, b) {

const figure = document.createElement("div");
document.body.appendChild(figure);

figure.style.background = color;
figure.style.top = top + "px";
figure.style.left = left + "px";
figure.classList.add("figure");

if (name === "круг") {
    figure.style.width = r + "px";
    figure.style.height = r + "px";
    figure.style.borderRadius = "50%";
}

else if (name === "квадрат") {
    figure.style.width = a + "px";
    figure.style.height = a + "px";
}

else if (name === "прямоугольник") {
    figure.style.width = a + "px";
    figure.style.height = b + "px";
}}    

document.addEventListener('keydown', function(event) {
    if (event.key == 'c'){
        return addFigure("круг", prompt('Цвет?'), prompt("Отступ сверху?"), prompt("Отступ слева?"), 
        prompt("Радиус круга?"));
    } 
    if (event.key == 's') {
        return addFigure("квадрат", prompt('Цвет?'), prompt("Отступ сверху?"), prompt("Отступ слева?"), "",
        prompt("Сторона квадрата или прямоугольника?"));
    }
    if (event.key == 'r') {
        return addFigure("прямоугольник", prompt('Цвет?'), prompt("Отступ сверху?"), prompt("Отступ слева?"), "",
        prompt("Сторона квадрата или прямоугольника?"), 
        prompt("Ещё одна сторона прямоугольника?"));
    }            
});



