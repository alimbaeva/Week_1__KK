/**
 * 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**
2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.
3. Дана строка **'JS'**. Сделайте из нее строку **'js'**.
4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.
5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
    **Пример: "Номер вашей карты: **********1245"**
 */
let stM = 'ddd@bbb@ccc'
let st = ''
for (let i = 0; i < stM.length; i++) {
    st += stM[i] === '@' ? '!' : stM[i];
}
console.log(st)



console.log('js-' + ('js'.toUpperCase()));


console.log('JS-' + ('JS'.toLowerCase()));



let stM2 = 'I am a hero!';
let sim = 0;
for (let i = 0; i < stM2.length; i++) {
    sim++;
}
console.log(stM2, '- количество символов : ', sim);



let card = (prompt('введите номер карты: '));
let part = card.slice(0, card.length - 4);
alert(card.replace(`${part}`, "****"))


