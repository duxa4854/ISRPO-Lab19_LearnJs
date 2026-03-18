for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 0;

while (count < 3) {
  console.log("Count:", count);
  count++;
}

let doValue = 0;
do {
  console.log("Value:", doValue);
  doValue++;
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

for (let i; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5));

function sayHello(name) {
  console.log(`Hello, ${name}`);
}
sayHello("Тимофей");

function printInfo(n = "Гость", f = "Фамилия") {
  console.log("Привет, " + n, f);
}
printInfo();
printInfo("Андрей", "Заиченко");

function greet(name = "Гость") {
  console.log("Привет, " + name);
}
greet();
greet("Анастасия");

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function sumFunc(a,b){
    return a + b;
}

const sumFunc2 = (a, b) => a + b;

const double = x * 2;

const sumFunc3 = (a,b) => a+b;

const sayGreeting = () => console.log("Hello");

const square = x => x * x;
const calculate = (a,b ) => {
    let result = a + b;
    return result * 2;
}

let numberArr = [1,2,3,4,5];
console.log(numberArr);

console.log(numberArr[0]);
console.log(numberArr[1]);


let colors = ["red", "green","blue"];

console.log("Первый элемент: ", colors[0]);
console.log("Последний элемент: ",colors[colors.length - 1]);

colors[1] = "yellow";

console.log("Массиы colors:", colors);

let numbersArr = [1,2,3,4,5];
console.log("Длина массива:", numbersArr.length);

numbersArr.push(10);
console.log("После рор():",numbersArr);

let student = [];

student.push("Alice");
student.push("Bob");
student.push("Charlie");


students.pop();

console.log("Итоговый массив students:", student);

let numbers2 = [10,20,30];
for (let i = 0; i < numbers2.length; i++){
    console.log(numbers2[i]);
}

for (let value of numbera2){
    console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

console.log(numberArr.includes(1));
console.log(numberArr.indexOf(2));


console.log(fruits.includes("ЯБЛОКО"));
console.log(fruits.includes("МАНГО"));


let cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"]
let cityToFind = "Казнь";

let index = cities.indexOf(cityToFind);

if (inndex !== -1){
    console.log(`Город "${cityToFind}"найден под индексом ${index}`);
    console.log(`Город"${cityToFind}" не найден`);
}