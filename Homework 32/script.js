
let num = +prompt("Enter the number");

function IsPerf(num) {
    let sum=0;
    for (let i=1; i<num; i++) {
        if (num%i===0) {
            sum=sum+i
        }
    }
    return (num===sum)
    /*Функція повертає значення TRUE, якщо число досконале, і False якщо ні. Результат не виводить!*/
}

function IsPerfAlert(num) {
    if (IsPerf(num)) {
        alert('It is perfect number')
    }   else {alert('It is not perfect number')}
    /*Виводить рузультат перевірки числа на досконале*/
}

IsPerfAlert(num);

function FindPerfNums(a, b) {
    let str=''; /*рядок досконалих чисел*/
    if (a>b) {
        alert('First entered number must be smaller than second')
    }
    for (let i=a; i<=b; i++) {
        if (IsPerf(i)) {
            str=str+i+' '
        }
    }
    if (str!=='') {
        alert(str);
    }   else {alert('No any perfect number in entered range')}
    /*Виводить всі досконалі числа заданого діапазону*/
}

let a=+prompt('Enter lesser number of range');
let b=+prompt('Enter bigger number of range');

FindPerfNums(a, b)




