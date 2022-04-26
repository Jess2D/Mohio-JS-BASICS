/*
//Display 0 to 9
for (i = 0; i <= 9; i++) {
  console.log(i);
}*/

//Display a row of 20 stars (*)
let text = "*";
let i = 0;
let row = "";
do {
  i++;
  row += text;
} while (i < 20);
console.log(row);
