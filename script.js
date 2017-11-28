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
document.writeln(`первая буква первой строки: ${line1.charAt(0)}, последняя буква первой строки: ${line1.charAt(lengthLine1-1)} <br>`);
document.writeln(`первая буква второй строки: ${line2.charAt(0)}, последняя буква второй строки: ${line2.charAt(lengthLine2-1)}<br>`);
document.writeln(`первая буква третей строки: ${line3.charAt(0)}, последняя буква третей строки: ${line3.charAt(lengthLine3-1)}<br>`);

var opBracketPozition = line1.indexOf('[');
var clBracketPozition = line1.indexOf(']');
document.writeln(`В первой строке `)
if(opBracketPozition===-1){
    document.writeln(`[ не найдено<br>`)
}
else{
document.writeln(`[ находится под номером ${opBracketPozition}<br>`);
}
if(clBracketPozition===-1){
    document.writeln(`] не найдено<br>`)
}
else{
document.writeln(`] находится под номером ${clBracketPozition}<br>`);
}

var opBracketPozition = line2.indexOf('[');
var clBracketPozition = line2.indexOf(']');
document.writeln(`Во второй строке `)
if(opBracketPozition===-1){
    document.writeln(`[ не найдено<br>`)
}
else{
document.writeln(`[ находится под номером ${opBracketPozition}<br>`);
}
if(clBracketPozition===-1){
    document.writeln(`] не найдено<br>`)
}
else{
document.writeln(`] находится под номером ${clBracketPozition}<br>`);
}

var opBracketPozition = line3.indexOf('[');
var clBracketPozition = line3.indexOf(']');
document.writeln(`В третей строке `)
if(opBracketPozition===-1){
    document.writeln(`[ не найдено<br>`)
}
else{
document.writeln(`[ находится под номером ${opBracketPozition}<br>`);
}
if(clBracketPozition===-1){
    document.writeln(`] не найдено<br>`)
}
else{
document.writeln(`] находится под номером ${clBracketPozition}<br>`);
}