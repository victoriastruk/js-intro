const a = 2;
const b = 3;
console.log(`${a} * ${b} = `, a * b);

const c = 20;
const d = 5;
console.log(`${c} / ${d} = `, c / d);

const e = 5;
const f = 6;
console.log(`${e} + ${f} = `, e + f);

const number = 11;
const boolean = true;
const string = "java script";
const stringOfNumber = "100";
console.log(number, boolean, string, stringOfNumber);

let num = 11;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

let num1 = +prompt("Введіть число:");
alert(`${num1}^2 = `+ Math.pow(num1, 2));

const n1 = +prompt("Введіть число");
const n2 = +prompt("Введіть число");
alert(`Середнє арифметичне ${n1} та ${n2} = ` + ((n1 + n2) / 2));

const m = +prompt("Введіть кількість хвилин:");
alert(`${m} хв = ` + m * 60 + " c");

const greeting = "Hello, ";
const userName = prompt("Як Вас звуть?");
alert(greeting + userName);
