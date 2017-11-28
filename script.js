const line1 = 'йцукенгшщзхъ';
const line2 = 'фывапролджэ';
const line3 = 'ячсмитьбю.';
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

var iPozition = line1.indexOf('и');
document.writeln(`В первой строке `)
if(iPozition===-1){
    document.writeln(`и не найдено<br>`)
}
else{
document.writeln(`и находится под номером ${iPozition}<br>`);
}

var iPozition = line2.indexOf('и');
document.writeln(`Во второй строке `)
if(iPozition===-1){
    document.writeln(`и не найдено<br>`)
}
else{
document.writeln(`и находится под номером ${iPozition}<br>`);
}

var iPozition = line3.indexOf('и');
document.writeln(`В третей строке `)
if(iPozition===-1){
    document.writeln(`и не найдено<br>`)
}
else{
document.writeln(`и находится под номером ${iPozition}<br>`);
}