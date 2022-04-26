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
