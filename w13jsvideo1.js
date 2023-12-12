
let now = new Date();
console.log(now);

let timetamp = new Date(24*3600*1000); // показывает сколько прошло с 1 ян 1970 милисекунд
console.log(timetamp);// покажет на сутки больше так как добавили сутки

let date = new Date('2023-12-12');// запись даты строкой
console.log(date);

let num = Date(2023,11,12);// выводим через (,) можно указать часы через запятую
console.log(num);

let date2 = (`${num.getDate()},${num.getMonth()},${num.getFullYear()}`);
console.log(date2);