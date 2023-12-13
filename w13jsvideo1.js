
let now = new Date();
console.log(now);

let timetamp = new Date(24*3600*1000); // показывает сколько прошло с 1 ян 1970 милисекунд
console.log(timetamp);// покажет на сутки больше так как добавили сутки

let date = new Date('2023-12-12');// запись даты строкой
console.log(date);

let num = new Date(2023,11,12);// выводим через (,) можно указать часы через запятую
console.log(num);

console.log(num.getDate());

let date2 = `${num.getDate()}.${num.getMonth() + 1}.${num.getFullYear()}`;
console.log(date2);

num.setFullYear(2024);
console.log(num);// можно поменять прямо старую переменную,
// не создовая новую, год в ней поменяется, это особенность new Date

//способ выведения даты
var options = { year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                timezone: "UTC"};
console.log(new Date().toLocaleString('ru', options));

//делаем разницу между датами//new Date() и Date.now() одинаково выводят текю дату
let date3 = new Date('2023-11-01'); // в английском стиле например(у многих стран так)
let diff = Date.now() - date3;
console.log(diff);// покажет разницу в мили секундах(исчисление с 01.01.1970 timestemp)
console.log(diff/ 1000 / 3600);// получим сколько часов прошло
