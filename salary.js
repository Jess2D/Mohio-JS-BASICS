/*
//Display 0 to 9
for (i = 0; i <= 9; i++) {
  console.log(i);
}*/
/*
//Display a row of 20 stars (*)
let text = "*";
let i = 0;
let row = "";
do {
  i++;
  row += text;
} while (i < 20);
console.log(row);*/

/*
//Request a number and display a row of that many stars (*)
var number = prompt("How many stars would you like?");
var text = "*";
var i = 0;
var row = "";
do {
  i++;
  row += text;
} while (i < number);
console.log(row);
*/

//Find out the sum from 1 to 20
/*
let sum = 0;
for (i = 1; i <= 20; i++) {
  sum += i;
}
console.log(sum);
*/

/*//Find out the sum from 1 + 1/2 + 1/3 + 1/4 +..+ 1/100
let sum = 0;
for (i = 1; i <= 100; i++) {
  sum += 1 / i;
}
console.log(sum);*/

//Find out the sum of odd numbers from 1 to 20
var sum = 0;
for (num = 1; num <= 20; num++) {
  if (num % 2 !== 0) {
    sum += num;
  }
}
console.log(sum);
