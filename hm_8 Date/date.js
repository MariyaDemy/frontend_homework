// assignment 1
let date = new Date(2019, 11, 18, 12, 20);
console.log(date);
       
// assignment 2 Какой день недели было 4 марта 2000 года
let d = new Date(2000, 2, 4);
    
switch (d.getDay()) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log("Sunday");
    }
    
// assignment 3 Вывести дату в формате dd.mm.yyyy hh:mm из количества милисекунд: 1590749435756

let da = new Date(1590749435756);

let day = da.getDate();
let month = da.getMonth() + 1;
if (month < 10) {
   month = '0' + month;
};
let year = da.getFullYear();
let hour = da.getHours();
let min = da.getMinutes();

console.log(`${day}.${month}.${year} ${hour}.${min}`);
    
    
// assignment 4 JSON
let user = {
    name: "User photo",
    size: "200 x 200",
};
    
let text = JSON.stringify(user);
console.log(text);
let newObj = JSON.parse(text);
console.log(newObj);    