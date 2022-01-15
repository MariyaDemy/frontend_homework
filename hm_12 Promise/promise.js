// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve('test');
//     }, 300);
//    });
//    newPromise.then((value) => {
//     console.log(value);
//     // "test"
//    });


// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000)) // 3
//    ]).then(alert);


// async function newFunc() {
//     let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000)
//     });
//     let result = await promise; // будет ждать, пока промис не
//    выполнится (*)
//     alert(result); // 1
//    }
//    newFunc();


// new Promise (resolve => {
//     setTimeout(() => resolve(prompt("smth")), 5000);
// })

// .then(value => setTimeout(console.log, 5000, value))


// const asyncFunction = async function() {
//     let name = new Promise (resolve => {
//         setTimeout(() => resolve(prompt("smth")), 5000);
// });
//     await setTimeout(console.log, 5000,name);
// }
// asyncFunction();

// assignment 1 Создайте асинхронную функцию getTasks(), которая возвращает массив
// объектов категорий. Данные получать по ссылке:
// Необходимо вывести имена описание этих задач на странице в виде списка

let getTasks = {};
const url = "https://test-todoist.herokuapp.com/api/tasks"
fetch(url)
.then((res) => {
    return res.json() ;
})
.then((body) => {
    const listElement = document.createElement('ul');
    for(const item of body){
        const listItem = document.createElement('li');
        listItem.innerText = item.description;
        listElement.appendChild(listItem);
    }
    document.body.appendChild(listElement)
})
.catch((err) => {
    console.log(err.status);
})


// assignment 2 Создайте асинхронную функцию getUsers(names), которая получает на
// вход массив логинов пользователей GitHub, запрашивает у GitHub
// информацию о них и возвращает массив объектов-пользователей.

const getGitUsersData = async function (userNames) {
    const users = [];
    for( const user of userNames){
        let userData = await getGitUserData(user);
        users.push(userData);
    }
    return users;
}

const getGitUserData = async function(username){
    const url = `https://api.github.com/users/${username}`;
    return fetch(url)
    .then((res) =>{
        return res.json();
    });
}
getGitUsersData(["MariyaDemy"]).then(data => console.log(data));


// assignment 3 На странице должен выводиться:
// - список категорий, полученных по GET запросу:
// - кнопка добавить категорию (POST запрос -
// https://test-todoist.herokuapp.com/api/categories) - после успешной отправки этого
// запроса - добавленная категория появляется в списке категорий


fetch('https://test-todoist.herokuapp.com/api/categories')
.then((response) => {
    return response.json() ;   
})
.then((b) => {
    const list = document.createElement('ul');
    for(const item of b){
        const listitem = document.createElement('li');
        listitem.innerText = item.name;
        list.appendChild(listitem);
    }
    document.body.appendChild(list)
})
.catch((error) => {
    console.log(error.status);
})


// let request ={
//         "id": "0",
//         "name": "string"
//     }
// const addCategory = (e) => {
//     fetch("https://test-todoist.herokuapp.com/api/categories", {method: 'POST', body: 
//     JSON.stringify(request) })
//     .then((response) => {
//         return response.json() ;   
//     })
// }
// document.querySelector("button").addEventListener('click', addCategory)