

let userSum = +prompt('sum of mohey');
let chocoOne = +prompt("price of choco");
let numberChoco=((userSum - userSum % chocoOne) / chocoOne);
let remainder= userSum % chocoOne;
alert("Available to buy " + numberChoco + " chocolates" + " and the rest of money is " + remainder + '$');




let num = +prompt('Enter a three-digit number');
let z = num % 10;
let y = (num%100 - num%10)/10;
let x = (num - num%100)/100;
alert(z + "" + y + "" + x);

 