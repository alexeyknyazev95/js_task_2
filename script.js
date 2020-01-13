"use strict";

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

console.log(money, appData.budget);

for (let i = 0; i <= 1; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = +prompt("Во сколько обойдется?");
    if (typeof(a) === 'string' && typeof(b) === 'number'
    && a != '' && b != '' && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b;
        //appData.budget -= b;
    }
    else {
        i--;
    }
}

 /*let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = +prompt("Во сколько обойдется?");
    if (typeof(a) === 'string' && typeof(b) === 'number'
    && a != '' && b != '' && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b;
    }
    else {
        i--;
    }
    i++;
} 
*/
/* let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = +prompt("Во сколько обойдется?");
    if (typeof(a) === 'string' && typeof(b) === 'number'
    && a != '' && b != '' && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b;
    }
    else {
        i--;
    }
    i++;
}
while (i < 2)*/

appData.moneyPerDay = appData.budget/30;

alert("Ваш бюджет на один день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минималка")
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Серединка");
}
else if (appData.moneyPerDay > 2000) {
    console.log("Вышка")
}
else 
    console.log("Ошибка")