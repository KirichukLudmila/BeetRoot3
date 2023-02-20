let userAge = +prompt('Enter your age');
if (isNaN(userAge)) {
    alert('введіть число')
}
else if (userAge>=0 && userAge<=11){
    alert('ти дитина')
}
else if (userAge>=12 && userAge<=17){
    alert('ти підліток')
}
else if (userAge>=18 && userAge<=59) {
    alert('ти дорослий')
}
else if (userAge>=60 ) {
    alert('ти пенсіонер')}



 let number = +prompt('intendedNumber');
 if (isNaN(number)) {
    alert('введіть число')}
 else if (number === 1) {
     alert('!')
}
 else if (number === 2) {
     alert('@ ')
}
 else if (number === 3)
     alert('#')
 else if (number === 4) {
     alert('$')
    }
 else if (number === 5) {
     alert('%')}
 else if (number === 6) {
     alert('^')
    }
 else if(number === 7) {
     alert('&')
    }
 else if (number === 8) {
     alert('*')
    }
 else if(number === 9) {
     alert('(')
    }
 else if (number === 0) {
     alert(')')
    }



let a=+prompt('number first');
let b=+prompt('number two');
sum=0;
for (let i=Math.min(a,b); i<=Math.max(a,b); i++){
    sum=sum + i
}
alert("The sum of numbers in a given range is " + sum)



let c=+prompt('number first');
let d=+prompt('number two');
if (isNaN(c || d))
    alert('введіть число');
let k=1;
for ( let i = 2; i>=2 && i<=Math.min(c, d); i++) {
    if ((c % i === 0) && (d % i === 0)) {
        k = i
    }

    }
alert("the greatest common divisor is " + k);



let e=+prompt('input number');
if (isNaN(e))
    alert('введіть число');
str=''
for ( let i = 2; i>=2 && i<=e; i++) {
    if (e % i === 0) {
        str = str + ' ' + i
    }

}
alert("Divisors of the entered number: " + str)


