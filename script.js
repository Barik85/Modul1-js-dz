const line1 = 'qwertyuiop[]\\';

const line2 = 'asdfghjkl;';

const line3 = 'zxcvbnm,./';

const lengthLine1 = line1.length;

const lengthLine2 = line2.length;

const lengthLine3 = line3.length;

document.writeln(`первая строка ${line1}<br>`);
document.writeln(`вторая строка ${line2}<br>`);
document.writeln(`третяя строка ${line3}<br>`);

document.writeln(`длинна первой строки ${lengthLine1}<br>`);
document.writeln(`длинна второй строки ${lengthLine2}<br>`);
document.writeln(`длинна третей строки ${lengthLine3}<br>`);
document.writeln(`первая буква первой строки: ${line1.charAt(0)}, последняя буква первой строки: ${line1.charAt(lengthLine1 - 1)} <br>`);
document.writeln(`первая буква второй строки: ${line2.charAt(0)}, последняя буква второй строки: ${line2.charAt(lengthLine2 - 1)}<br>`);
document.writeln(`первая буква третей строки: ${line3.charAt(0)}, последняя буква третей строки: ${line3.charAt(lengthLine3 - 1)}<br>`);

var opBracketPozition = line1.indexOf('[');

var clBracketPozition = line1.indexOf(']');

document.writeln(`В первой строке `);
opBracketPozition === -1 ? document.writeln(`[ не найдено<br>`) : 
document.writeln(`[ находится под номером ${opBracketPozition}<br>`);

clBracketPozition === -1 ? document.writeln(`] не найдено<br>`) :
document.writeln(`] находится под номером ${clBracketPozition}<br>`);


var opBracketPozition = line2.indexOf('[');
var clBracketPozition = line2.indexOf(']');
document.writeln(`Во второй строке `)
opBracketPozition === -1 ? document.writeln(`[ не найдено<br>`) :
    document.writeln(`[ находится под номером ${opBracketPozition}<br>`);

clBracketPozition === -1 ? document.writeln(`] не найдено<br>`) :
document.writeln(`] находится под номером ${clBracketPozition}<br>`);


var opBracketPozition = line3.indexOf('[');
var clBracketPozition = line3.indexOf(']');
document.writeln(`В третей строке `)

opBracketPozition === -1 ? document.writeln(`[ не найдено<br>`) :
    document.writeln(`[ находится под номером ${opBracketPozition}<br>`);

clBracketPozition === -1 ? document.writeln(`] не найдено<br>`) :
document.writeln(`] находится под номером ${clBracketPozition}<br>`);

document.writeln(`а теперь массив <br>`)
let arr = [String(line1), String(line2), String(line3)];
var opBracketPozition = arr.indexOf('[');
var clBracketPozition = arr.indexOf(']');
opBracketPozition === -1 ? document.writeln(`[ не найдено<br>`) :
document.writeln(`[ находится под номером ${opBracketPozition}<br>`);

clBracketPozition === -1 ? document.writeln(`] не найдено<br>`) :
document.writeln(`] находится под номером ${clBracketPozition}<br>`);

console.log(`Доп задание1`);
const a = 6;
const b = 10;
let result;

result = a + b;
console.log(a+b); // -> 16

console.log(-a); // -6

console.log(a * b); // 60

console.log(a / b); // 0.6

// использовать %
console.log(b % a); // 4

console.log(`Доп задание2`);
const day = '02';
const month = '10';
const year = '2017';

const date = day + "/" + month + "/" + year;

console.log(date); // "02/10/2017"

console.log(`Доп задание 3`)
/* Надо расскомментировать строку #14.
   Ввести любой текст. 
   Этот текст будет присвоен переменной message.
   Затем для переменной inLowerCase надо присвоить
   результат вызова метода обработки строки message так,
   чтобы все символы строки были в нижнем регистре.
   Для переменной inUpperCase - в верхнем регистре.
   Если все будет сделано верно, то в консоле 
   будет выведен текст:
   success: in all lowercase
   success: in all uppercase
*/

const message = prompt("Enter any message:", "");

// здесь заменить 'str' и 'STR' на message и вызов метода
let inLowerCase = message.toLocaleLowerCase; // -> "success: in all lowercase"
let inUpperCase = message.toLocaleUpperCase; // -> "success: in all uppercase"



//============= Функция для проверки кода ================= //
function checkCase(str) {
  if (str && str === str.toLowerCase()) {
    return "success: in all lowercase";
  } else if (str && str === str.toUpperCase()) {
    return "success: in all uppercase";
  }
  return "error: not in all lowercase or uppercase";
}
//============= end Функция для проверки кода ============== //
console.log(checkCase(inLowerCase)); // success: in all lowercase
console.log(checkCase(inUpperCase)); // success: in all uppercase

