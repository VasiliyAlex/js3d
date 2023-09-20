let x = +prompt('введите первое число');
let y = +prompt('введите второе число');
let z = x

for(let i = 2; i <= y; i++) {
    z = z * x
 }
 alert(z)
 
 
 let a = +prompt('введите количество ступенек');
 let d = prompt('введите  символ отступа');
 let b = prompt('введите конечный символ');
  console.log(b);
for(let i = 2; i <= a; i++) {
    b = d + b
    console.log(b)
 }